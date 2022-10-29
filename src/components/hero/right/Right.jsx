import React from "react";
import styled from "styled-components";

import hero_image from "../../../assets/hero_image.png";
import hero_image_back from "../../../assets/hero_image_back.png";

import HeartRate from "./HeartRate";
import Calories from "./Calories";
import Btn from "../../../UI/Btn";
import { motion } from "framer-motion";
import useScreenWidth from "../../../utilities/hooks/useScreenWidth";

function Right() {
  const transition = { type: "spring", duration: 3 };
  const mobile = useScreenWidth() > 768 ? true : false;

  return (
    <RightContainer>
      <JoinBtn>Join Now</JoinBtn>
      <HeartRate />
      <img src={hero_image} alt="" />
      {mobile ? (
        <motion.img
          initial={{ left: "0rem" }}
          whileInView={{ left: "-14rem" }}
          transition={{ ...transition, type: "tween" }}
          src={hero_image_back}
          alt=""
        />
      ) : (
        <motion.img src={hero_image_back} alt="" />
      )}

      <Calories />
    </RightContainer>
  );
}

export default Right;

const JoinBtn = styled(Btn)`
  color: black;
  position: absolute;
  right: 3rem;
  top: 2rem;
`;

const RightContainer = styled.div`
  position: relative;
  flex: 1;
  background-color: var(--orange);

  > img:nth-of-type(1) {
    position: absolute;
    top: 11rem;
    right: 8rem;
    width: 23rem;
  }
  > img:nth-of-type(2) {
    position: absolute;
    top: 4rem;
    /* right: 20rem; */
    left: 0rem;
    z-index: -1;
    width: 15rem;
  }
  @media (max-width: 768px) {
    background: none;
    > img:nth-of-type(1) {
      position: relative;
      top: -4rem;
      right: 0;
      left: 50%;
      width: 15rem;
      align-self: center;
    }

    > img:nth-of-type(2) {
      /* position: relative; */
      top: 4rem;
      right: 0;
      left: 20%;
      width: 15rem;
    }
  }
`;
