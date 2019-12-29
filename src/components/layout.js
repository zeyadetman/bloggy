/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './header';
import './layout.css';
import InfoCard from './infoCard';
import breakpoints from '../themes/breakpoints';
import colors from '../themes/colors';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif !important;
  }

  body {
    .rc-pagination-item-active {
      background-color: ${colors.primary};
      border-color: ${colors.primary};
    }

    .rc-pagination-item:hover a {
      color: ${colors.primary};
    }

    .rc-pagination-item:hover {
      border-color: ${colors.primary};
    }

    h1, ul, h2 {
      margin: 0;
    }
  }
`;

const MainContainerSectionStyle = styled.div`
  display: flex;
  position: relative;

  @media (max-width: ${breakpoints.tablet}px) {
    flex-direction: column;    
  }
`;

const MainSectionStyle = styled.main`
  margin-left: 2rem;
`;

const FooterStyle = styled.footer`
  position: absolute;
  bottom: 0;
  height: 50px;
`;

const Layout = ({ children }) => {
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
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainContainerSectionStyle>
        <InfoCard />
        <MainSectionStyle>
          {children}

          <FooterStyle />
        </MainSectionStyle>
      </MainContainerSectionStyle>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
