import React from "react";
import styled from "styled-components";
import { Player } from "@lottiefiles/react-lottie-player";
import BgImg from "./HeroBackground";
import HeroContent from "./HeroContent";
import { Container, HeroWrapper, SvgPlayer } from "./styled";

const Hero: React.FC = () => (
  <>
    <Container name="top">
      <BgImg />
      <HeroWrapper>
        <HeroContent />
      </HeroWrapper>
    </Container>
    <SvgPlayer
      autoplay
      loop
      src="/scrollDown.json"
      style={{ height: "30px", width: "30px" }}
    />
  </>
);

export default Hero;
