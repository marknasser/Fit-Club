import React from "react";
import styled from "styled-components";

import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";

function Left() {
  return (
    <LeftContainer>
      <img src={Image1} alt="" />
      <img src={Image2} alt="" />
      <img src={Image3} alt="" />
      <img src={Image4} alt="" />
    </LeftContainer>
  );
}

export default Left;

const LeftContainer = styled.div`
  /* background-color: var(--orange); */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  flex: 1 1;

  > img {
    object-fit: cover;
  }

  & img:nth-of-type(1) {
    width: 12rem;
    grid-row: 1/3;
    height: 28rem;
  }
  & img:nth-of-type(2) {
    width: auto;
    height: 16rem;
    grid-column: 2/4;
  }
  & img:nth-of-type(3) {
    width: 14rem;
    grid-row: 2;
    grid-column: 2/3;
  }
  & img:nth-of-type(4) {
    width: 10rem;
    grid-row: 2;
    grid-column: 3/4;
  }
  @media (max-width: 1200px) {
    margin: auto;

    & img:nth-of-type(1) {
      width: 7rem;
      height: 17rem;
    }
    & img:nth-of-type(2) {
      width: 15rem;
      height: 10rem;
    }
    & img:nth-of-type(3) {
      width: 7rem;
      height: 6rem;
    }
    & img:nth-of-type(4) {
      width: 7rem;
      height: 6rem;
    }
  }
`;
