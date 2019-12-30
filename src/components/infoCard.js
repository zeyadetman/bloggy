import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import twitterIcon from '../images/twitter.png';
import linkedinIcon from '../images/linkedin.png';
import facebookIcon from '../images/facebook.png';
import githubIcon from '../images/github.png';
import { theme } from '../../configs';


const InfoCardStyle = styled.div`
  @media (min-width: ${theme.breakpoints.tablet - 1}px) {
    padding-left: 4rem;
    min-width: 16rem;
    max-width: 16rem;
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

const AvatarSectionStyle = styled.div`
    img {
        border-radius: 50%;
        width: 8em;
        min-width: 8em;
        height: 8em;
        border: 0.2em solid rgb(248, 173, 54);
        box-shadow: rgba(0, 0, 0, 0.6) 0px 2px 7px;
    }
`;

const ContentSectionStyle = styled.div`
  h2, p {
    opacity: 0.8;
  }
  h2 {
    font-size: 1.5em;
  }
  @media (max-width: ${theme.breakpoints.tablet}px) {
    p {
    margin-bottom: 0;
    }
  }
  
  font-size: 1em;
  
`;
const SocialSectionStyle = styled.ul`
  @media (max-width: ${theme.breakpoints.tablet}px) {
    display: flex;
  }

  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    a{
      color: ${theme.colors.primary};
      opacity: 0.8;
      text-transform: capitalize;
      text-decoration: none;

      &:hover{
        text-decoration: underline;
      }
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

// eslint-disable-next-line react/prop-types
const Image = ({ img }) => <img alt="social" src={img} style={{ width: 20, margin: 0, marginRight: 5 }} />;
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
            linkedIn
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
        <p>{author.title}</p>
        {width < theme.breakpoints.tablet ? (
          <SocialSectionStyle>
            {author.twitter ? (
              <li>
                <a href={`https://twitter.com/${author.twitter}`} aria-label="social"><Image img={twitterIcon} /></a>
              </li>
            ) : null}
            {author.github ? (
              <li>
                <a href={`https://github.com/${author.github}`} aria-label="social"><Image img={githubIcon} /></a>
              </li>
            ) : null}
            {author.facebook ? (
              <li>
                <a href={`https://facebook.com/${author.facebook}`} aria-label="social"><Image img={facebookIcon} /></a>
              </li>
            ) : null}
            {author.linkedin ? (
              <li>
                <a href={`https://www.linkedin.com/in/${author.linkedin}`} aria-label="social"><Image img={linkedinIcon} /></a>
              </li>
            ) : null}
          </SocialSectionStyle>
        ) : null}
      </ContentSectionStyle>
      {width > theme.breakpoints.tablet ? (
        <SocialSectionStyle>
          {author.twitter ? (
            <li>
              <Image img={twitterIcon} />
              <a href={`https://twitter.com/${author.twitter}`}>Twitter</a>
            </li>
          ) : null}
          {author.github ? (
            <li>
              <Image img={githubIcon} />
              <a href={`https://github.com/${author.github}`}>Github</a>
            </li>
          ) : null}
          {author.facebook ? (
            <li>
              <Image img={facebookIcon} />
              <a href={`https://facebook.com/${author.facebook}`}>Facebook</a>
            </li>
          ) : null}
          {author.linkedin ? (
            <li>
              <Image img={linkedinIcon} />
              <a href={`https://www.linkedin.com/in/${author.linkedin}`}>LinkedIn</a>
            </li>
          ) : null}
        </SocialSectionStyle>
      ) : null}
    </InfoCardStyle>
  );
}

export default InfoCard;
