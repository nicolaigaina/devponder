import React from "react";
import { StyledOutlinedAnchor, StyledRoundedAnchor } from "./styled";

export const RoundedAnchor: React.FC = ({ children, ...rest }) => {
  return <StyledRoundedAnchor {...rest}>{children}</StyledRoundedAnchor>;
};

export const OutlinedAnchor: React.FC = ({ children, ...rest }) => {
  return <StyledOutlinedAnchor {...rest}>{children}</StyledOutlinedAnchor>;
};
