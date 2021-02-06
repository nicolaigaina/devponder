import { Divide as Hamburger } from 'hamburger-react';
import { config, useTransition } from 'react-spring';
import styled from 'styled-components';
import { DarkMode } from 'use-dark-mode';
import { THEME_COLORS } from '../../styles/constants';
import SideDrawer from './SideDrawer';

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOn: boolean) => void;
  darkMode: DarkMode;
};

const MobileNav: React.FC<Props> = ({
  isMenuOpen,
  setIsMenuOpen,
  darkMode,
}) => {
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const SideDrawerTransition = useTransition(isMenuOpen, null, {
    config: config.stiff,
    from: { opacity: 0, transform: "translateX(-50%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(50%)" },
  });
  return (
    <Container>
      {SideDrawerTransition.map(
        ({ item, key, props }) =>
          item && (
            <SideDrawer
              key={key}
              style={props}
              setIsMenuOpen={() => setIsMenuOpen(false)}
              toggleDarkMode={() => darkMode.toggle()}
            />
          )
      )}
      <Hamburger
        size={20}
        color={
          darkMode.value ? THEME_COLORS.WHITE : THEME_COLORS.LIGHT_THEME_TEXT
        }
        toggled={isMenuOpen}
        toggle={toggleMenu}
        easing="ease-in"
        rounded
        label="Show menu"
        hideOutline={true}
      />
    </Container>
  );
};

const Container = styled.div`
  display: none;
  @media only screen and (max-width: 830px) {
    display: block;
  }
`;

export default MobileNav;
