import { THEME_COLORS } from './constants';

export const lightTheme = {
  primary: THEME_COLORS.PRIMARY,
  secondary: THEME_COLORS.SECONDARY,
  text: THEME_COLORS.LIGHT_THEME_TEXT,
  bg: THEME_COLORS.WHITE,
  footer: THEME_COLORS.LIGHT_THEME_FOOTER,
  white: THEME_COLORS.WHITE,
  mediaQueries: {
    smallest: `only screen and (max-width: 25em)`,
    smaller: "only screen and (max-width: 31.25em)",
    small: "only screen and (max-width: 37.5em)",
    medium: "only screen and (max-width: 56.25em)",
    large: "only screen and (max-width: 80em)",
    larger: "only screen and (max-width: 90em)",
    largest: "only screen and (max-width: 97em)",
  },
};

export const darkTheme = {
  primary: THEME_COLORS.PRIMARY,
  secondary: THEME_COLORS.SECONDARY,
  text: THEME_COLORS.DARK_THEME_TEXT,
  bg: THEME_COLORS.DARK_BG,
  footer: THEME_COLORS.WHITE,
  white: THEME_COLORS.WHITE,
  mediaQueries: {
    smallest: `only screen and (max-width: 25em)`,
    smaller: "only screen and (max-width: 31.25em)",
    small: "only screen and (max-width: 37.5em)",
    medium: "only screen and (max-width: 56.25em)",
    large: "only screen and (max-width: 80em)",
    larger: "only screen and (max-width: 90em)",
    largest: "only screen and (max-width: 97em)",
  },
};
