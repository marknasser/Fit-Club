import React from "react";
import styled from "styled-components";

import SectionContainer from "../../UI/SectionContainer";

import Left from "./Left";
import Right from "./Right";

function WhyUs() {
  return (
    <WhyUsContainer id="whyUs">
      <Left />
      <Right />
    </WhyUsContainer>
  );
}

export default WhyUs;

const WhyUsContainer = styled(SectionContainer)`
  display: flex;
  gap: 2rem;
  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;
