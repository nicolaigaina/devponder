import React from "react";
import styled from "styled-components";
import { THEME_COLORS } from "../../styles/constants";

const PrimaryPath = styled.path``;
const SecondaryPath = styled.path``;

const HeroImage = styled.svg`
  ${PrimaryPath} {
    animation: float 10s ease-in-out 3s infinite;
  }
  ${SecondaryPath} {
    animation: float 10s ease-in-out infinite;
  }
  @keyframes float {
    0% {
      /* box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6); */
      transform: translatey(0px) rotate(0deg);
    }
    50% {
      /* box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2); */
      transform: translatey(-60px) rotate(5deg);
    }
    100% {
      /* box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6); */
      transform: translatey(0px) rotate(0deg);
    }
  }
`;

const HeroBackground: React.FC = () => (
  <HeroImage
    width="1015"
    height="956"
    viewBox="0 0 1015 956"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="hero_bg"
  >
    <PrimaryPath
      d="M727.82 321.691C783.212 323.626 815.738 384.798 786.367 431.802L601.172 728.175C571.801 775.179 502.561 772.761 476.54 723.823L312.47 415.253C286.45 366.315 323.164 307.56 378.555 309.495L727.82 321.691Z"
      fill={THEME_COLORS.PRIMARY}
      fillOpacity="0.5"
    />
    <SecondaryPath
      d="M283.417 108C311.13 60 380.412 60 408.125 108L582.863 410.656C610.576 458.656 575.935 518.656 520.51 518.656H171.032C115.607 518.656 80.9655 458.656 108.678 410.656L283.417 108Z"
      fill={THEME_COLORS.SECONDARY}
      fillOpacity="0.5"
    />
  </HeroImage>
);

export default HeroBackground;
