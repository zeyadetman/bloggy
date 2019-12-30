import { Link } from 'gatsby';
import PropTypes from 'prop-types';
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
    a:hover{
      opacity: 1;
    }
  }

  ul {
    display: flex;
    list-style: none;

    & li {
      margin: 0.5rem;
      padding: 0.25em;
    }
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <h1>
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>

    <ul>
      <li>
        <Link to="/blog">
          Blog
        </Link>
      </li>
      <li>
        <Link to="/about">
          About
        </Link>
      </li>
    </ul>
  </HeaderStyle>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
