import { css } from "styled-components";
import { THEME_COLORS } from "./constants";

type CommonStylesProps = {
  theme: { secondary: THEME_COLORS };
  secondary?: THEME_COLORS;
};

export const DefaultRounded = css<CommonStylesProps>`
  background: ${({ theme, secondary }) =>
    secondary ? theme.secondary : theme.primary};
  padding: 0.5rem 2rem;
  font-size: 0.7rem;
  border-radius: 2rem;
  color: ${THEME_COLORS.WHITE};
  border: 2px solid
    ${({ theme, secondary }) => (secondary ? theme.secondary : theme.primary)};
  cursor: pointer;
  text-decoration: none;
`;

export const DefaultOutlined = css<CommonStylesProps>`
  background: transparent;
  padding: 0.5rem 2rem;
  font-size: 0.7rem;
  border-radius: 2rem;
  color: ${({ theme, secondary }) =>
    secondary ? theme.secondary : theme.primary};
  border: 2px solid
    ${({ theme, secondary }) => (secondary ? theme.secondary : theme.primary)};
  cursor: pointer;
  text-decoration: none;
`;
