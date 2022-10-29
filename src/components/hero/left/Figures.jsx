import React from "react";
import styled from "styled-components";
import NumberCounter from "number-counter";

function Figures() {
  return (
    <FiguresContainer>
      <div>
        <NumberCounter end={140} delay="4" preFix="+" />
        <span>EXPERT COACHES</span>
      </div>
      <div>
        <NumberCounter end={578} delay="4" preFix="+" />
        <span>MEMBERS JOINED</span>
      </div>
      <div>
        <NumberCounter end={50} delay="4" preFix="+" />
        <span>FITNESS PROGRAMS</span>
      </div>
    </FiguresContainer>
  );
}

export default Figures;

const FiguresContainer = styled.div`
  display: flex;
  gap: 2rem;
  color: white;

  > div {
    display: flex;
    flex-direction: column;
  }
  > div > div:first-child {
    font-size: 2rem;
  }
  > div > span:last-child {
    color: var(--gray);
    font-size: 0.7rem;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    /* text-align: center; */
    margin: auto;
    > div > div:first-child {
      font-size: 1.3rem;
    }
  }
`;
