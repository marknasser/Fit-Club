import React from "react";
import styled from "styled-components";

import CaloriesImg from "../../../assets/calories.png";
import { motion } from "framer-motion";

import useScreenWidth from "../../../utilities/hooks/useScreenWidth";
import { useEffect } from "react";

function Calories() {
  const transition = { type: "spring", duration: 3 };
  const mobile = useScreenWidth() > 768 ? true : false;

  return (
    <>
      {mobile ? (
        <CaloriesContainer
          as={motion.div}
          initial={{ left: "-40rem" }}
          whileInView={{ left: "-20rem" }}
          transition={{ ...transition, type: "tween" }}
        >
          <img src={CaloriesImg} alt="graph" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </CaloriesContainer>
      ) : (
        <CaloriesContainer>
          <img src={CaloriesImg} alt="graph" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </CaloriesContainer>
      )}
    </>
  );
}

export default Calories;

const CaloriesContainer = styled.div`
  display: flex;
  background-color: var(--caloryCard);
  gap: 1.5rem;
  width: fit-content;
  padding: 1.2rem;
  border-radius: 8px;
  position: absolute;
  left: -40rem;
  bottom: 4rem;

  > img {
    width: 3rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  > div span:nth-of-type(1) {
    color: var(--gray);
  }

  > div span:nth-of-type(2) {
    font-size: 1.5rem;
    color: white;
  }
  @media (max-width: 768px) {
    left: 2rem;
    right: 0;
    bottom: 0;

    > img {
      width: 2rem;
    }
    > div span:nth-of-type(2) {
      font-size: 1rem;
    }
  }
`;
