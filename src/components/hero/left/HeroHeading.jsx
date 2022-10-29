import React from "react";
import styled from "styled-components";

import OutlineText from "../../../UI/OutlineText";

function HeroHeading() {
  return (
    <HeroText>
      <div>
        <OutlineText size="4.5rem">Shape</OutlineText> <span>Your</span>
      </div>
      <div>
        <span>Ideal body</span>
      </div>
      <div>
        <span>
          in here we will help you to change and build your ideal body and live
          up your life to fullest
        </span>
      </div>
    </HeroText>
  );
}

export default HeroHeading;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 4.5rem;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  text-overflow: inherit;

  > div:nth-of-type(3) {
    font-size: 1rem;
    font-weight: 200;
    text-transform: none;
    letter-spacing: 1px;
    width: 80%;
  }
  @media (max-width: 768px) {
    font-size: xx-large;
    align-items: center;
    justify-content: center;
    > div:nth-of-type(3) {
      text-align: center;
      font-size: small;
    }
  }
`;
