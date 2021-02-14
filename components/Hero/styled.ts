import { Element } from 'react-scroll';
import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';
import { OutlinedAnchor } from '../Anchor';

type Props = {
  target: string;
  href: string;
};

export const Anchor = styled(OutlinedAnchor)<Props>`
  margin-left: 2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const TextWrapper = styled.div`
  margin-bottom: 3rem;
  h1 {
    color: ${({ theme }) => theme.text};
    font-size: 5rem;
    font-weight: 100;
    padding: 0;
    margin: 0;
    span {
      color: ${({ theme }) => theme.primary};
      font-weight: 500;
    }
  }
  p {
    color: ${({ theme }) => theme.text};
    font-weight: 100;
    span {
      font-weight: 500;
      margin-left: -15px;
      color: ${({ theme }) => theme.secondary};
    }
  }
`;

export const SvgPlayer = styled(Player)`
  position: absolute;
  z-index: 2;
  bottom: 15px;
  /* width: 50px;
  height: 50px; */
`;

export const Container = styled(Element)`
  position: relative;
  overflow: hidden;
  max-width: 100vw;
  width: 100%;
  height: 95vh;
  max-height: 800px;
  display: flex;
  align-items: flex-start;
  .hero_bg {
    position: absolute;
    top: 28px;
    right: -300px;
    z-index: 0;
    width: 1200px;

    @media ${({ theme }) => theme.mediaQueries.larger} {
      /* opacity: 0.5; */
      width: 1000px;
      height: 800px;
      right: -300px;
      top: 28px;
    }

    @media ${({ theme }) => theme.mediaQueries.large} {
      opacity: 0.5;
      width: 1000px;
      height: 800px;
      right: -300px;
      top: 28px;
    }

    @media ${({ theme }) => theme.mediaQueries.medium} {
      opacity: 0.5;
      width: 1000px;
      height: 800px;
      right: -220px;
      top: 28px;
    }

    @media ${({ theme }) => theme.mediaQueries.small} {
      width: 800px;
      height: 600px;
      right: -300px;
      top: 28px;
    }
  }
`;

export const HeroWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: auto;
  padding: 3rem 1rem;
  display: flex;
  align-items: center;
  margin-bottom: 0;
`;
