import React from "react";
import styled from "styled-components";
import { testimonialsData } from "../../data/testimonialsData";

import Left from "./Left";
import Right from "./Right";

import SectionContainer from "../../UI/SectionContainer";
import { useState } from "react";

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const availableData = testimonialsData[index];

  const onRightHandler = () => {
    setIndex((prevState) => {
      let updatedState = prevState;
      if (updatedState < testimonialsData.length - 1) {
        updatedState++;
      } else {
        updatedState = 0;
      }
      return updatedState;
    });
    setAnimate((prevState) => !prevState);
  };

  const onLeftHandler = () => {
    setIndex((prevState) => {
      let updatedState = prevState;
      if (updatedState > 0) {
        updatedState--;
      } else {
        updatedState = testimonialsData.length - 1;
      }
      return updatedState;
    });
  };

  return (
    <TestimonialsContainer id="testimonials">
      <Left
        // animate={animate}
        review={availableData.review}
        name={availableData.name}
        status={availableData.status}
        onRight={onRightHandler}
        index={index}
      />
      <Right
        // animate={animate}
        image={availableData.image}
        onRight={onRightHandler}
        onLeft={onLeftHandler}
        index={index}
      />
    </TestimonialsContainer>
  );
}

export default Testimonials;

const TestimonialsContainer = styled(SectionContainer)`
  display: flex;
  /* justify-content: space-between; */
  @media (max-width: 1200px) {
    text-align: center;
    flex-direction: column;
    align-items: center;
    gap: 70px;
  }
`;
