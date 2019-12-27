import React from 'react';
import styled from 'styled-components';

const InfoCardStyle = styled.div``;
const AvatarSectionStyle = styled.div``;
const ContentSectionStyle = styled.div``;
const SocialSectionStyle = styled.div``;


function InfoCard() {
  return (
    <InfoCardStyle>
      <AvatarSectionStyle>
        Avatar
      </AvatarSectionStyle>
      <ContentSectionStyle>
        Content
      </ContentSectionStyle>
      <SocialSectionStyle>
        Social
      </SocialSectionStyle>
    </InfoCardStyle>
  );
}

export default InfoCard;
