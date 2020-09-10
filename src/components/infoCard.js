import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import twitterIcon from '../images/twitter.png';
import linkedinIcon from '../images/linkedin.png';
import facebookIcon from '../images/facebook.png';
import githubIcon from '../images/github.png';
import { theme } from '../../configs';
import SocialImage from './socialImage';
import { AvatarSectionStyle, SocialSectionStyle, ContentSectionStyle } from '../styles/shared';


const InfoCardStyle = styled.div`
  @media (min-width: ${theme.breakpoints.tablet - 1}px) {
    padding-left: 5rem;
    min-width: 20rem;
    max-width: 20rem;
    position: sticky;
    position: -webkit-sticky;
    height: fit-content;
    top: 5%;
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    display: flex;
    align-items: center;
    padding-left: 2rem;
    font-size: 12px;

    & img {
        margin-right: 1rem;
    }
  }     
`;

const useWindowSize = () => {
  const isClient = typeof window === 'object';

  const [size, setSize] = useState([
    isClient ? window.innerWidth : 0,
    isClient ? window.innerHeight : 0,
  ]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([isClient ? window.innerWidth : 0, isClient ? window.innerHeight : 0]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

function InfoCard() {
  const [width] = useWindowSize();
  const { site: { siteMetadata: { author } } } = useStaticQuery(graphql`
    {
        site {
        siteMetadata {
            author {
            name
            avatar
            facebook
            linkedin
            github
            title
            twitter
            }
        }
        }
    }
  `);

  return (
    <InfoCardStyle width={width}>
      <AvatarSectionStyle>
        <img src={author.avatar} alt="avatar" />
      </AvatarSectionStyle>
      <ContentSectionStyle>
        <h2>{author.name}</h2>
        <h3>{author.title}</h3>
        {width < theme.breakpoints.tablet ? (
          <SocialSectionStyle>
            {author.twitter ? (
              <li>
                <a href={`https://twitter.com/${author.twitter}`} aria-label="social"><SocialImage img={twitterIcon} /></a>
              </li>
            ) : null}
            {author.github ? (
              <li>
                <a href={`https://github.com/${author.github}`} aria-label="social"><SocialImage img={githubIcon} /></a>
              </li>
            ) : null}
            {author.facebook ? (
              <li>
                <a href={`https://facebook.com/${author.facebook}`} aria-label="social"><SocialImage img={facebookIcon} /></a>
              </li>
            ) : null}
            {author.linkedin ? (
              <li>
                <a href={`https://www.linkedin.com/in/${author.linkedin}`} aria-label="social"><SocialImage img={linkedinIcon} /></a>
              </li>
            ) : null}
          </SocialSectionStyle>
        ) : null}
      </ContentSectionStyle>
      {width > theme.breakpoints.tablet ? (
        <SocialSectionStyle>
          {author.twitter ? (
            <li>
              <SocialImage img={twitterIcon} />
              <a href={`https://twitter.com/${author.twitter}`}>Twitter</a>
            </li>
          ) : null}
          {author.github ? (
            <li>
              <SocialImage img={githubIcon} />
              <a href={`https://github.com/${author.github}`}>Github</a>
            </li>
          ) : null}
          {author.facebook ? (
            <li>
              <SocialImage img={facebookIcon} />
              <a href={`https://facebook.com/${author.facebook}`}>Facebook</a>
            </li>
          ) : null}
          {author.linkedin ? (
            <li>
              <SocialImage img={linkedinIcon} />
              <a href={`https://www.linkedin.com/in/${author.linkedin}`}>LinkedIn</a>
            </li>
          ) : null}
        </SocialSectionStyle>
      ) : null}
    </InfoCardStyle>
  );
}

export default InfoCard;
