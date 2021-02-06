import React from 'react';
import { animated } from 'react-spring';
import styled from 'styled-components';
import lockBodyScroll from '../../utils/lockBodyScroll';
import DarkModeToggle from './DarkModeToggle';
import NavLinks from './NavLinks';

type Props = {
  setIsMenuOpen: (isOpen: boolean) => void;
  toggleDarkMode: () => void;
  style?: any;
};

const SideDrawer: React.FC<Props> = ({
  setIsMenuOpen,
  toggleDarkMode,
  ...rest
}) => {
  lockBodyScroll();
  return (
    <Container {...rest}>
      <Wrapper>
        <NavLinks mobile onClick={() => setIsMenuOpen(false)} />
        <DarkModeToggle />
        {/* <button onClick={() => toggleDarkMode()}>Toggle</button> */}
      </Wrapper>
    </Container>
  );
};

const Container = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background: ${({ theme }) => theme.bg};
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  height: 100%;
  display: flex;
  transition: background 0.2s ease-out;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
  padding: 2rem 1rem;
  width: 100%;
  svg {
    margin-bottom: 5rem;
  }
`;

export default SideDrawer;
