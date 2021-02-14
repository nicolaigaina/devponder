import { Element } from 'react-scroll';
import styled from 'styled-components';
import { THEME_COLORS } from '../../styles/constants';

type CardContainerProps = {
  alt: number;
};

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: ${({ alt }) => (alt ? "row-reverse" : "row")};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 3rem 0;
`;

export const ButtonWrapper = styled.div`
  margin-top: 2rem;
  a {
    margin-right: 1rem;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 3rem;
  width: calc(50% - 4rem);

  @media ${({ theme }) => theme.mediaQueries.medium} {
    width: 100%;
  }

  @media ${({ theme }) => theme.mediaQueries.small} {
    padding: 0 1rem;
  }

  h1 {
    position: relative;
    font-style: italic;
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 500;
    margin: 1rem 0;
    margin-top: 2rem;
    background: ${({ theme }) => theme.primary};
    padding: 0 1rem;
    color: ${THEME_COLORS.WHITE};

    &::before {
      content: "";
      z-index: -1;
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      width: 100%;
      transform: translate(4px 4px);
      background: ${({ theme }) => theme.secondary};
    }
  }

  p {
    font-size: 0.8rem;
    font-weight: bold;
    margin: 1rem 0;
    color: ${({ theme }) => theme.text};
  }
`;

export const CardImg = styled.img`
  width: 45%;
  min-width: 300px;
  box-shadow: 4px 4px 25px -9px rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
`;

export const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.primary};
  font-weight: 400;
  font-size: 1.5rem;
  margin: 3rem 0;
`;

export const ProjectsContainer = styled(Element)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  .err {
    width: 300px;
    z-index: 1;
  }

  .hero_bg {
    position: absolute;
    top: -0px;
    left: -150px;
    z-index: 0;
    @media ${({ theme }) => theme.mediaQueries.medium} {
      opacity: 0.5;
      width: 800px;
      height: 800px;
      right: -220px;
      top: 0px;
    }
    @media ${({ theme }) => theme.mediaQueries.small} {
      width: 600px;
      height: 600px;
      right: -220px;
      top: 0px;
    }
  }
`;

export const ProjectsWrapper = styled.div`
  max-width: 1000px;
  margin: auto;
  z-index: 1;
  padding: 0 2rem;
`;
