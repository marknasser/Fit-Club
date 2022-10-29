import React from "react";
import styled from "styled-components";
import SectionContainer from "../../UI/SectionContainer";

import Left from "./Left";
import Right from "./Right";

function Join() {
  return (
    <JoinContainer>
      <Left />
      <Right />
    </JoinContainer>
  );
}

export default Join;

const JoinContainer = styled(SectionContainer)`
  display: flex;
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 30px;
  }
`;
