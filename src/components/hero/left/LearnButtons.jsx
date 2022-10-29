import React from "react";
import styled from "styled-components";

function LearnButtons() {
  return (
    <ButtonsContainer>
      <button>Get Started</button>
      <button>Learn More</button>
    </ButtonsContainer>
  );
}

export default LearnButtons;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: auto;

  > button:hover,
  > button {
    outline: none;
  }
  > button {
    padding: 0.5rem 1.5em;
    color: white;
    border: 2px solid var(--orange);
    font-weight: bold;
    cursor: pointer;
  }

  > button:first-of-type {
    background-color: var(--orange);
  }
  > button:last-of-type {
    background-color: transparent;
  }
`;
