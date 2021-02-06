import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: inherit;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  transition: all 0.2s ease-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media ${({ theme }) => theme.mediaQueries.small} {
    margin: 1rem 0;
    font-size: 0.9rem;
  }
`;

type Props = {
  key: number;
  link: {
    title: string;
  };
  onClick?: () => void;
};

const NavLink: React.FC<Props> = ({ link, onClick }) => (
  <StyledLink
    onClick={onClick}
    to={`${link.title.split(" ").join("-").toLowerCase()}`}
    spy={true}
    smooth={true}
  >
    {link.title}
  </StyledLink>
);

export default NavLink;
