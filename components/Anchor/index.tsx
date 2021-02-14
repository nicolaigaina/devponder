import React from 'react';
import { StyledOutlinedAnchor, StyledRoundedAnchor } from './styled';

type Props = {
  target?: string;
  href: string;
};

export const RoundedAnchor: React.FC<Props> = ({
  children,
  target,
  href,
  ...rest
}) => (
  <StyledRoundedAnchor href={href} target={target} {...rest}>
    {children}
  </StyledRoundedAnchor>
);

export const OutlinedAnchor: React.FC<Props> = ({
  children,
  target,
  href,
  ...rest
}) => (
  <StyledOutlinedAnchor href={href} target={target} {...rest}>
    {children}
  </StyledOutlinedAnchor>
);
