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
import useWindowSize from '../hooks/useWindowSize';
import breakpoints from '../themes/breakpoints';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif !important;
  }

  body {
    color: #000 !important;

    h1, ul, h2 {
      margin: 0;
    }
  }
`;

const MainContainerSectionStyle = styled.div`
  display: flex;
  position: relative;
  height: 85vh;

  ${(props) => (props.width > breakpoints.tablet ? '' : `
    flex-direction: column;
  `)}
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
  const { width } = useWindowSize();
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
      <MainContainerSectionStyle width={width}>
        <InfoCard />
        <MainSectionStyle>
          {children}

          <FooterStyle>
          ©
            {new Date().getFullYear()}
            , Built with
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </FooterStyle>
        </MainSectionStyle>
      </MainContainerSectionStyle>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
