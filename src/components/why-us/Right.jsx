import React from "react";
import styled from "styled-components";

import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

import { UL_List } from "../../UI/UL_List";
import { RegularText } from "../../UI/RegularText";

import OutlineText from "../../UI/OutlineText";

function Right() {
  return (
    <RightContainer>
      <span>SOME REASONS</span>
      <div>
        <OutlineText>why</OutlineText>
        <RegularText>choose us?</RegularText>
      </div>
      <UL_List>
        <li>over 140+ expert coachs</li>
        <li>train smarter and faster than before</li>
        <li>1free program for new member</li>
        <li>reliable partners</li>
      </UL_List>
      <span>our partners</span>
      <div>
        <img src={nb} alt="" />
        <img src={adidas} alt="" />
        <img src={nike} alt="" />
      </div>
    </RightContainer>
  );
}

export default Right;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
  gap: 1rem;
  color: white;

  > span {
    text-transform: uppercase;
    word-spacing: 0.5rem;
    font-weight: bold;
  }
  > span:nth-of-type(1) {
    color: var(--orange);
  }

  > span:nth-of-type(2) {
    color: var(--gray);
  }

  > div:nth-of-type(1) {
    display: flex;
    align-items: center;
    gap: 2rem;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    border-bottom: 5px solid var(--orange);
    width: fit-content;
    font-size: 3rem;
  }

  > div:nth-of-type(2) {
    display: flex;
    gap: 1rem;

    > img {
      width: 2.5rem;
    }
  }
  @media (max-width: 1200px) {
    margin: auto;
    div,
    span {
      text-align: center;
    }
    > div:nth-of-type(2) {
      justify-content: center;
    }
  }
`;
