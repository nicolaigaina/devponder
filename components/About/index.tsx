import React from 'react';
import { RoundedAnchor } from '../Anchor';
import { Container } from './styled';

const About: React.FC = () => {
  return (
    <Container name="about">
      <h1>ABOUT ME</h1>
      <p>
        My name is <span className="bold">N Gaina</span> and I am a{" "}
        <span className="bold">Software Engineer</span> from the{" "}
        <span className="primary">Bay Area, CA</span>. I have a serious passion
        for building aesthetic web applications. I specialize in creating fast
        and responsive apps that work on all devices.
      </p>
      <p>
        I have been developing web apps fulltime for the past 4 years. In
        addition to developing, in my spare time, I have been teaching others
        how to code on{" "}
        <a target="_blank" href="" className="bold primary">
          Youtube
        </a>{" "}
        over the last year.
      </p>
      <p className="italic">
        I’m a hard working and passionate developer that loves to learn!
      </p>
      <h3>Dev Stack</h3>
      <p className="bold-stack">
        HTML5 - CSS3 - JAVASCRIPT - SASS - REACT - REDUX - STYLED COMPONENTS -
        TYPESCRIPT - BABEL - GRAPHQL - NEXTJS - GIT - WEBPACK - JEST - ENZYME -
        REACT-TESTING-LIBRARY{" "}
      </p>
      <RoundedAnchor href="" target="_blank">
        RESUME
      </RoundedAnchor>
    </Container>
  );
};

export default About;
