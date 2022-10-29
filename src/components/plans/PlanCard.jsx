/* eslint-disable react/jsx-pascal-case */
import React from "react";
import styled from "styled-components";
import whiteTick from "../../assets/whiteTick.png";

import { UL_List } from "../../UI/UL_List";
import Btn from "../../UI/Btn";

function PlanCard({ id, icon, name, price, features }) {
  return (
    <PlanCardContainer id={id}>
      {icon}
      <span>{name}</span>
      <span>$ {price}</span>

      <UL_List url={whiteTick} size="1.4rem" imgTop="3px">
        {features.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </UL_List>

      <div>
        <span>See more benefits </span>
        <i class="fa-solid fa-arrow-right"></i>
      </div>

      <Btn
        textColor={id === 1 ? "white" : "black"}
        bgColor={id === 1 ? "black" : "white"}
      >
        Join now
      </Btn>
    </PlanCardContainer>
  );
}

export default PlanCard;

const PlanCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  gap: 2.5rem;
  color: white;
  background: var(
    ${(props) => (props.id === 1 ? "--planCard" : "--caloryCard")}
  );
  transform: scale(${(props) => (props.id === 1 ? 1.1 : 1)});

  > span:nth-of-type(1) {
    font-weight: Bold;
  }
  > span:nth-of-type(2) {
    font-size: 3rem;
    font-weight: Bold;
  }
  > ul {
    opacity: 0.8;
    font-size: 0.8rem;
  }
  > div {
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
  }
  > svg {
    fill: var(${(props) => (props.id === 1 ? "yellow" : "--orange")});
    width: 2rem;
    height: 2rem;
  }
`;
