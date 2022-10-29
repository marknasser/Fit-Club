import React from "react";
import styled from "styled-components";

import Header from "./header/Header";
import TheBest from "./TheBest";
import HeroHeading from "./HeroHeading";
import Figures from "./Figures";
import LearnButtons from "./LearnButtons";

function Left() {
  return (
    <LeftContainer>
      <Header />
      <TheBest />
      <HeroHeading />
      <Figures />
      <LearnButtons />
    </LeftContainer>
  );
}

export default Left;

const LeftContainer = styled.div`
  padding: 2rem;
  padding-top: 1.5rem;
  flex: 3;
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;
