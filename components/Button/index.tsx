import React from "react";
import { StyledButton, StyledOutlinedButton } from "./styled";

// Reqular Button
export const Button: React.FC = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

// Outlined Button
export const OutlinedButton: React.FC = ({ children, ...rest }) => {
  return <StyledOutlinedButton {...rest}>{children}</StyledOutlinedButton>;
};
