import React, { RefObject } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import BgImg from './HeroBackground';
import HeroContent from './HeroContent';
import { Container, HeroWrapper, SvgPlayer } from './styled';

const Hero: React.FC = () => {
  const playerRef: RefObject<Player> = React.createRef();
  return (
    <>
      <Container name="top">
        <BgImg />
        <HeroWrapper>
          <HeroContent />
        </HeroWrapper>
      </Container>
      <SvgPlayer
        ref={playerRef}
        autoplay
        loop
        src="/scrollDown.json"
        style={{ height: "60px", width: "150px" }}
      />
    </>
  );
};

export default Hero;
