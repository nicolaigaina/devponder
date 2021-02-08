import React from "react";
import { StyledOutlinedLink, StyledRoundedLink } from "./styled";

type Props = {
  to: string;
};

export const RoundedLink: React.FC<Props> = ({ children, to, ...rest }) => {
  return (
    <StyledRoundedLink
      to={`${to.split(" ").join("-").toLowerCase()}`}
      {...rest}
      spy={true}
      smooth={true}
    >
      {children}
    </StyledRoundedLink>
  );
};

export const OutlinedLink: React.FC<Props> = ({ children, to, ...rest }) => {
  return (
    <StyledOutlinedLink
      to={`${to.split(" ").join("-").toLowerCase()}`}
      {...rest}
      spy={true}
      smooth={true}
    >
      {children}
    </StyledOutlinedLink>
  );
};
