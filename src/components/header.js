import { Link, useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { theme } from '../../configs';


const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  box-shadow: 0 0 5px hsla(0,0%,51.8%,.65);
  margin-bottom: 2rem;

  a {
     text-decoration: none;
     color: ${theme.colors.primary};

    &:hover{
      opacity: 0.7;
    }
  }

  h1{
    font-size: 2rem;
    margin-bottom: 0;
    a:hover{
      opacity: 1;
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-bottom: 0;

    & li {
      margin-bottom: 0;
      margin: 0.5rem;
      padding: 0.25em;
      font-size: 1.2rem;
    }
  }
`;

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <HeaderStyle>
      <h1>
        <Link to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>

      <ul>
        <li>
          <Link to="/blog">
          Blog
          </Link>
        </li>
        {/* <li>
          <Link to="/about">
          About
          </Link>
        </li> */}
      </ul>
    </HeaderStyle>
  );
};

export default Header;
