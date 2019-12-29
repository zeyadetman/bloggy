/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, Link } from 'gatsby';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import styled from 'styled-components';
import Layout from '../components/layout';
import colors from '../themes/colors';
import configs from '../../configs';

const PostsListStyle = styled.ul`
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    
    h2 {
      text-decoration: underline;
      margin-bottom: 0.25rem;
      a{
        color: ${colors.primary};
        opacity: 0.8;
      
        &:hover{
          opacity: 1;
        }
      }
    }
  
  
  }
`;
const BlogPostTemplate = ({ data }) => {
  const { edges: posts, pageInfo, totalCount } = data.allMarkdownRemark;
  return (
    <Layout>
      <PostsListStyle>
        {posts.map(({ node }) => {
          const { title, path } = node.frontmatter;
          return (
            <li key={path}>
              <h2>
                <Link to={path}>
                  {title}
                </Link>
              </h2>
              {node.excerpt}
            </li>
          );
        })}
      </PostsListStyle>

      {totalCount > configs.postsPerPage ? (
        <Pagination
          current={pageInfo.currentPage}
          total={totalCount}
          pageSize={pageInfo.perPage}
          itemRender={(currentPage, t, element) => (
            t === 'page'
              ? <Link to={currentPage === 1 ? '/blog' : `/blog/${currentPage}`}>{currentPage}</Link>
              : element
          )}
          onChange={(currentPage) => {
          // eslint-disable-next-line no-restricted-globals
            location.replace(currentPage === 1 ? '/blog' : `/blog/${currentPage}`);
          }}
        />
      ) : null}
    </Layout>
  );
};

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
    ) {
        edges {
            node {
              excerpt(format: PLAIN)
              frontmatter {
                  title
                  path
              }
            }
        }
        totalCount
        pageInfo {
            pageCount
            perPage
            itemCount
            hasPreviousPage
            currentPage
            hasNextPage
        }
    }
  }
`;

export default BlogPostTemplate;
