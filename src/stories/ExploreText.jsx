import React from "react";
import styled from "styled-components";

import OutlineText from "../UI/OutlineText";
import { RegularText } from "../UI/RegularText";

function ExploreText({ text1, text2, text3, fontSize = "3rem" }) {
  return (
    <Container>
      <OutlineText size={fontSize}>{text1}</OutlineText>
      <RegularText size={fontSize}>{text2}</RegularText>
      <OutlineText size={fontSize}>{text3}</OutlineText>
    </Container>
  );
}

export default ExploreText;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  font-style: italic;

  margin-bottom: 2rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    /* text-align: center; */

    span:nth-of-type(2) {
      margin: auto;
    }
    span:nth-of-type(3) {
      margin-left: auto;
    }
  }
  @media (max-width: 900px) {
    text-align: center;
    span {
      margin: auto;
    }
  }
`;
