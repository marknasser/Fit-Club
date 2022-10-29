import React from "react";
import styled from "styled-components";

import Logo from "../../../../assets/logo.png";
import MainNavigation from "./MainNavigation";

function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="logo" />
      <MainNavigation />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 10rem;
    height: 3rem;
  }
`;
