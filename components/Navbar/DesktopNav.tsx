import React from 'react';
import styled from 'styled-components';
import { DarkMode } from 'use-dark-mode';
import DarkModeToggle from './DarkModeToggle';
import NavLinks from './NavLinks';

type Props = {
  darkMode: DarkMode;
};

const DesktopNav: React.FC<Props> = () => {
  return (
    <Container>
      <NavLinks />
      <DarkModeToggle />
    </Container>
  );
};

export const Container = styled.div`
  flex-direction: row;
  display: flex;
  @media only screen and (max-width: 830px) {
    display: none;
  }
  a {
    font-size: 0.7rem;
  }
  svg {
    cursor: pointer;
    transition: transform 0.2s ease-in;
    &:hover {
      transform: translateY(-4px);
    }
  }
`;

export default DesktopNav;
