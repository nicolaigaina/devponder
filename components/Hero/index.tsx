import React from 'react';
import BgImg from './HeroBackground';
import HeroContent from './HeroContent';
import { Container, HeroWrapper, SvgPlayer } from './styled';

const Hero: React.FC = () => (
  <>
    <Container name="top">
      <BgImg />
      <HeroWrapper>
        <HeroContent />
      </HeroWrapper>
    </Container>
    <SvgPlayer autoplay loop src="" style={{ height: "30px", width: "30px" }} />
  </>
);

export default Hero;
