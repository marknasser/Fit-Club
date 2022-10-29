import React from "react";
import styled from "styled-components";

import { BlurBackground } from "../../UI/BlurBackground";

import Logo from "../../assets/logo.png";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";

function Footer() {
  return (
    <>
      <hr width="100%" />
      <FooterContainer>
        <div>
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={Linkedin} alt="" />
        </div>
        <div>
          <img src={Logo} alt="" />
        </div>
        <BlurBackground blur="200px" width="26rem" heigh="5rem" left="15%" />
        <BlurBackground blur="200px" width="26rem" heigh="5rem" right="15%" />
      </FooterContainer>
    </>
  );
}

export default Footer;
const FooterContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  margin-bottom: 5rem;
  margin-top: -2rem;

  > div:nth-of-type(1) {
    display: flex;
    gap: 4rem;
    img {
      width: 2rem;
    }
  }
  > div:nth-of-type(2) {
    img {
      width: 10rem;
    }
  }
`;
