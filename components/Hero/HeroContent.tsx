import React from 'react';
import styled from 'styled-components';
import { RoundedLink } from '../Link';
import { Anchor, ButtonWrapper, TextWrapper } from './styled';

const Container = styled.div`
  padding: 2rem;
  z-index: 1;
`;

const HeroContent = () => {
  return (
    <Container>
      <TextWrapper>
        <h1>Hello,</h1>
        <h1>
          I'm <span>N</span>
        </h1>
        <p>
          <span>A</span> Software Engineer
        </p>
        <p>Youtuber</p>
      </TextWrapper>
      <ButtonWrapper>
        <RoundedLink to="about">ABOUT</RoundedLink>
        <Anchor target="_blank" href="">
          RESUME
        </Anchor>
      </ButtonWrapper>
    </Container>
  );
};

export default HeroContent;
