import React from "react";
import { animated, config, useTrail } from "react-spring";
import styled from "styled-components";
import NavLink from "./NavLink";

const Links = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Portfolio",
    href: "#portfolio",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

type Props = {
  mobile?: boolean;
  onClick?: () => void;
};

type ContainerProps = {
  mobile: boolean;
};

const NavLinks: React.FC<Props> = ({ mobile, onClick }) => {
  const linksTrail = useTrail(Links.length, {
    config: config.wobbly,
    delay: 300,
    opacity: 1,
    transform: "translateY(0px)",
    from: {
      opacity: 0,
      transform: "translateY(20px)",
      display: "flex",
      cursor: "pointer",
    } as any,
  });

  return (
    <Container mobile={Boolean(mobile)}>
      {linksTrail.map((propStyles, index) => (
        <animated.div key={Links[index].title} style={propStyles}>
          <NavLink key={index} link={Links[index]} onClick={onClick} />
        </animated.div>
      ))}
    </Container>
  );
};

const Container = styled.div<ContainerProps>`
  display: flex;
  overflow: hidden;
  flex: 1;
  flex-direction: ${({ mobile }) => (mobile ? "column" : "row")};
  justify-content: ${({ mobile }) => (mobile ? "center" : "flex-end")};
  align-items: center;
  /* @media ${({ theme }) => theme.mediaQueries.large} {
    margin-right: ${({ mobile }) => (mobile ? "0rem" : "4rem")};
  } */
`;

export default NavLinks;
