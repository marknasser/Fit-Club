import React from "react";
import styled from "styled-components";

import Left from "./left/Left";
import Right from "./right/Right";

import { BlurBackground } from "../../UI/BlurBackground";

function Hero(props) {
  console.log(props.isThis);
  return (
    <StyledContainer>
      <BlurBackground left="0" />
      <Left />
      <Right />
    </StyledContainer>
  );
}

export default Hero;

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
