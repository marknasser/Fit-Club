import styled from "styled-components";

export const RegularText = styled.span`
  font-size: ${(props) => props.size || "3rem"};
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  @media (max-width: 768px) {
    font-size: xx-large;
  }
`;
