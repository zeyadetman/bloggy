/**
 * HomeLayout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './header';
import './layout.css';
import { theme } from '../../configs';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif !important;
  }

  body {
    .rc-pagination-item-active {
      background-color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
    }

    .rc-pagination-item:hover a {
      color: ${theme.colors.primary};
    }

    .rc-pagination-item:hover {
      border-color: ${theme.colors.primary};
    }
  }
`;

const MainContainerSectionStyle = styled.div`
  display: flex;
  position: relative;

  @media (max-width: ${theme.breakpoints.tablet}px) {
    flex-direction: column;    
  }
`;

const FooterStyle = styled.footer`
  position: absolute;
  bottom: 0;
  height: 50px;
`;

const HomeLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <MainContainerSectionStyle>
      {children}
      <FooterStyle />
    </MainContainerSectionStyle>
  </>
);

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeLayout;
