import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import colors from '../themes/colors';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  box-shadow: 0 0 5px hsla(0,0%,51.8%,.65);
  margin-bottom: 2rem;

  a {
     text-decoration: none;
     color: ${colors.primary};

    &:hover{
      opacity: 0.7;
    }
  }

  ul {
    display: flex;
    list-style: none;

    & li {
      margin: 1rem;
      padding: 0.25em;
    }
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <h1>
      {siteTitle}
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
