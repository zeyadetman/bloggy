/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import { theme } from '../../configs';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const BlogPostTitleStyle = styled.h1`
    margin-bottom: 1rem;
  `;

  const DateSectionStyle = styled.span`
    font-weight: 800;
    opacity: 0.6;
    font-size: 0.9rem;

    time {
      font-weight: 500;
    }
  `;

  const BlogPostContainer = styled.div`
    & .blog-post {
      max-width: 1110px;

      @media (max-width: ${theme.breakpoints.tablet}px) {
        width: 80%;
        margin: 1.5rem auto 0 auto;   
      }
    }
  `;

  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <BlogPostContainer>
        <div className="blog-post">
          <BlogPostTitleStyle>{frontmatter.title}</BlogPostTitleStyle>
          <div
            className="blog-post-content"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <DateSectionStyle>
              Date:
            {' '}
            <time dateTime={frontmatter.date}>{frontmatter.date}</time>
          </DateSectionStyle>
        </div>
      </BlogPostContainer>
    </Layout>
  );
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
