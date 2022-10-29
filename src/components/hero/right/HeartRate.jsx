import React from "react";
import styled from "styled-components";

import heart from "../../../assets/heart.png";
import { motion } from "framer-motion";

function HeartRate() {
  const transition = { type: "spring", duration: 3 };
  return (
    <HeartContainer
      as={motion.div}
      initial={{ right: "-1rem" }}
      whileInView={{ right: "3rem" }}
      transition={{ ...transition, type: "tween" }}
    >
      <img src={heart} alt={"heart"} />
      <span>Heart Rate</span>
      <span>116 bpm</span>
    </HeartContainer>
  );
}

export default HeartRate;

const HeartContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--darkGrey);
  gap: 1.1rem;
  width: 6rem;
  border-radius: 0.3rem;
  padding: 1rem;
  position: absolute;
  /* right: 4rem; */
  top: 7rem;

  > img {
    width: 2rem;
  }

  > span:nth-of-type(1) {
    font-size: 0.9rem;
    color: var(--gray);
  }
  > span:nth-of-type(2) {
    color: white;
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    position: relative;
    left: 1rem;
    top: 2rem;
  }
`;
