import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/seo';
import HomeLayout from '../components/homeLayout';
import SocialImage from '../components/socialImage';
import twitterIcon from '../images/twitter.png';
import linkedinIcon from '../images/linkedin.png';
import facebookIcon from '../images/facebook.png';
import githubIcon from '../images/github.png';
import { AvatarSectionStyle, SocialSectionStyle } from '../styles/shared';

const IndexPage = () => {
  const { site: { siteMetadata: { author, intro } } } = useStaticQuery(graphql`
    {
        site {
        siteMetadata {
            intro
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

  const HomeContent = styled.div`
    margin: 4rem auto;
    text-align: center;

    & .name {
      font-size: 2rem;
      font-weight: 800;
      margin-bottom: 0.5rem;
    }

    & .title {
      font-size: 1.5rem;
      font-weight: 500;
    }

    & .intro {
      max-width: 500px;
      text-align: center;
    }
  `;

  return (
    <HomeLayout>
      <SEO title="Home" />
      <HomeContent>
        <AvatarSectionStyle size="lg">
          <img src={author.avatar} alt="avatar" />
        </AvatarSectionStyle>
        <h2 className="name">{author.name}</h2>
        <h3 className="title">{author.title}</h3>
        <p className="intro">{intro}</p>
        <SocialSectionStyle dir="row">
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
      </HomeContent>
    </HomeLayout>
  );
};

export default IndexPage;
