import styled from 'styled-components';
import { theme } from '../../configs';

export const AvatarSectionStyle = styled.div`
    img {
        border-radius: 50%;
        width: ${(({ size }) => (size === 'lg' ? '12em' : '8em'))};
        min-width: ${(({ size }) => (size === 'lg' ? '12em' : '8em'))};
        height: ${(({ size }) => (size === 'lg' ? '12em' : '8em'))};
        border: 1px solid #3f3f3f;
        box-shadow: rgba(0, 0, 0, 0.6) 0px 2px 10px;
        margin-bottom: 1rem;
    }
`;

export const ContentSectionStyle = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1rem;
    font-weight: 500;
  }

  @media (max-width: ${theme.breakpoints.tablet}px) {
    h3 {
    margin-bottom: 1rem;
    }

    ul {
      margin-bottom: 0;
    }
  }
  
  font-size: 1em;
`;

export const SocialSectionStyle = styled.ul`
  display: flex;
  margin-left: 0;
  flex-direction: ${({ dir }) => (dir === 'row' ? 'row' : 'column')};
  justify-content: ${({ dir }) => (dir === 'row' ? 'center' : '')};
  
  @media (max-width: ${theme.breakpoints.tablet}px) {
    display: flex;
    flex-direction: row;
  }

  

  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &:not(:last-of-type) {
      margin-right: ${({ dir }) => (dir === 'row'
    ? '1rem'
    : '')};
    }

    a{
      color: ${theme.colors.primary};
      text-transform: capitalize;
      text-decoration: none;

      &:hover{
        text-decoration: underline;
      }
    }
  }
`;
