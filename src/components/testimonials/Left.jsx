import React from "react";
import styled from "styled-components";

import { motion } from "framer-motion";

import OutlineText from "../../UI/OutlineText";
import { RegularText } from "../../UI/RegularText";

function Left(props) {
  const transition = { type: "spring", duration: 0.5 };
  return (
    <LeftContainer>
      <span>TESTIMONIALS</span>
      <OutlineText>what they</OutlineText>
      <RegularText>say about us</RegularText>
      <motion.p
        key={props.index}
        initial={{ right: "55px", opacity: "0.1" }}
        whileInView={{ right: "0px", opacity: "1" }}
        transition={{ ...transition, type: "tween" }}
      >
        {props.review}
      </motion.p>
      <div>
        <span>{props.name}</span>-<span>{props.status}</span>
      </div>
    </LeftContainer>
  );
}
export default Left;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  gap: 2rem;
  /* flex: 1 1; */

  > span:nth-of-type(1) {
    color: var(--orange);
    font-weight: bold;
  }
  > p {
    letter-spacing: 0.1rem;
    word-spacing: 0.5rem;
    line-height: 2rem;
    min-width: 40rem;
    max-width: 50rem;
    position: relative;
    right: 55px;
    opacity: 0.1;
  }
  > div {
    span:nth-of-type(1) {
      color: var(--orange);
    }
  }

  @media (max-width: 1200px) {
    > p {
      min-width: auto;
      max-width: auto;
    }
  }
`;
