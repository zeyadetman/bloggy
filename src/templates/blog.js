/* eslint-disable react/prop-types */
import React from 'react';
import { graphql, Link } from 'gatsby';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import Layout from '../components/layout';

const BlogPostTemplate = ({ data }) => {
  const { edges: posts, pageInfo, totalCount } = data.allMarkdownRemark;
  return (
    <Layout>
      <ul>
        {posts.map(({ node }) => {
          const { title, path } = node.frontmatter;
          return (
            <li key={path}>
              <Link to={path}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>

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
