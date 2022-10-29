import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useScreenWidth from "../../../../utilities/hooks/useScreenWidth";

function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const mobile = useScreenWidth() < 768 ? true : false;

  return (
    <Navigation isOpen={isOpen}>
      {mobile && (
        <div>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
      )}
      <ul>
        <li>
          <Link to="programs">Programs</Link>
        </li>
        <li>
          <Link to="whyUs">Why Us</Link>
        </li>
        <li>
          <Link to="plans">Plans</Link>
        </li>
        <li>
          <Link to="testimonials">Testimonials</Link>
        </li>
      </ul>
    </Navigation>
  );
}

export default MainNavigation;

const Navigation = styled.nav`
  position: relative;
  z-index: 1000;
  > ul {
    display: flex;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  > ul a {
    display: block;
    text-decoration: none;
    color: white;
    cursor: pointer;
    min-width: fit-content;
    /* background-color: #4b4b4b; */
  }
  > ul a:hover {
    color: var(--orange);
  }
  div {
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: var(--appColor);
  }
  svg {
    display: block;
    color: white;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    position: fixed;
    right: 2rem;
    ul {
      width: 200px;
      display: ${(props) => (props.isOpen ? "flex" : "none")};
      flex-direction: column;
      position: absolute;
      top: 2.4rem;
      right: 0;
      background-color: var(--appColor);
      padding: 1.5rem;
    }
    a {
      padding: 0.3rem 0.7rem;
    }
  }
`;
