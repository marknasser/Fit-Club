import React from "react";
import styled from "styled-components";

import OutlineText from "../../UI/OutlineText";
import { RegularText } from "../../UI/RegularText";

function Left() {
  return (
    <LeftContainer>
      <div>
        <OutlineText>ready to</OutlineText>
        <RegularText> level up</RegularText>
      </div>
      <div>
        <RegularText>your body</RegularText>
        <OutlineText> with us?</OutlineText>
      </div>
    </LeftContainer>
  );
}

export default Left;

const LeftContainer = styled.div`
  flex: 1;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 11rem;
    height: 3px;
    top: -5px;
    background-color: var(--orange);
  }
`;
