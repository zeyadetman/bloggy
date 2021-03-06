/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import Header from './header';
import './layout.css';
import InfoCard from './infoCard';
import { theme } from '../../configs';

deckDeckGoHighlightElement();

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

const MainSectionStyle = styled.main`
  margin-left: 0;
`;

const FooterStyle = styled.footer`
  position: absolute;
  bottom: 0;
  height: 50px;
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <MainContainerSectionStyle>
      <InfoCard />
      <MainSectionStyle>
        {children}
        <FooterStyle />
      </MainSectionStyle>
    </MainContainerSectionStyle>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
