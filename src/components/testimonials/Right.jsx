import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";

function Right(props) {
  const transition = { type: "spring", duration: 0.5 };

  const rightHandler = () => {
    props.onRight();
  };
  const leftHandler = () => {
    props.onLeft();
  };

  return (
    <RightContainer>
      <div>
        <FontAwesomeIcon onClick={leftHandler} icon={faArrowLeft} />
        <FontAwesomeIcon onClick={rightHandler} icon={faArrowRight} />
      </div>
      <div>
        <motion.div
          initial={{ x: "-50px", opacity: "0" }}
          whileInView={{ x: "0", opacity: "1" }}
          transition={{ ...transition, type: "tween" }}
        ></motion.div>

        <motion.div
          key={props.index}
          initial={{ x: "50px", opacity: "0" }}
          whileInView={{ x: "0", opacity: "1" }}
          transition={{ ...transition, type: "tween" }}
        ></motion.div>

        <motion.img
          key={props.index}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ ...transition, type: "tween" }}
          src={props.image}
          alt=""
        />
        {/* <motion.img
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ ...transition, type: "tween" }}
          src={props.image}
          alt=""
        /> */}
      </div>
    </RightContainer>
  );
}

export default Right;

const RightContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  justify-content: flex-start;
  align-items: flex-start;
  /* flex: 1 1; */

  > div:nth-of-type(1) {
    margin-top: 260px;
    display: flex;
    gap: 0.8rem;
    /* align-self: end; */
    svg {
      color: white;
      cursor: pointer;
      font-size: 1.3rem;
    }
    svg:nth-of-type() {
    }
  }

  > div:nth-of-type(2) {
    position: relative;
    > img {
      width: 15rem;
      object-fit: cover;
    }
    /* &:before {
      content: "";
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      left: -15px;
      top: -15px;
      border: 2px solid var(--orange);
    }
    &:after {
      content: "";
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      left: 15px;
      top: 15px;
      background: var(--planCard);
    } */
    > div:nth-of-type(1) {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      left: -15px;
      top: -15px;
      border: 2px solid var(--orange);
    }
    > div:nth-of-type(2) {
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      left: 15px;
      top: 15px;
      background: var(--planCard);
    }
  }
`;
