import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import useWindowSize from '../hooks/useWindowSize';
import breakpoints from '../themes/breakpoints';

const InfoCardStyle = styled.div`
    ${(props) => (props.width > breakpoints.tablet ? `
        text-align: center;
        min-width: 16rem;
        max-width: 16rem;
    ` : `
        display: flex;
        align-items: center;
        padding-left: 2rem;
        font-size: 12px;

        & img {
            margin-right: 1rem;
        }
    `)}
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
    font-size: 1rem;
`;
const SocialSectionStyle = styled.div``;


function InfoCard() {
  const { width } = useWindowSize();
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
      </ContentSectionStyle>
      <SocialSectionStyle />
    </InfoCardStyle>
  );
}

export default InfoCard;
