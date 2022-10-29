import React from "react";
import styled from "styled-components";

import { swipeLeft } from "../../../animations/animations";

import { motion } from "framer-motion";

function TheBest() {
  const transition = { type: "spring", duration: 3 };
  return (
    <TheBestContainer className="the-best-ad">
      {/* <div></div> */}
      <motion.div
        initial={{ right: "7px" }}
        whileInView={{ left: "7px" }}
        transition={{ ...transition, type: "tween" }}
      ></motion.div>
      <span>the best fitness club in the town</span>
    </TheBestContainer>
  );
}

export default TheBest;

const TheBestContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  padding: 0 14px;
  height: 4rem;
  margin-top: 4rem;
  border-radius: 4rem;
  background-color: #363d42;
  transition: 3s;

  > div {
    box-sizing: border-box;
    position: absolute;
    background-color: var(--orange);
    width: 6rem;
    height: calc(100% - 14px);
    right: 7px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    border-radius: 3rem;
    /* transition: 3s;
    animation: ${swipeLeft} 3s linear forwards; */
  }

  > span {
    position: relative;
    z-index: 3;
    color: white;
    text-transform: uppercase;
  }
  @media (max-width: 768px) {
    /* width: 300px; */
    margin: auto;
    margin-top: 0;
    font-size: 3.2vw;
    transform: scale(0.8);
  }
`;
