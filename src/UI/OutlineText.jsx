import styled from "styled-components";

const OutlineText = styled.span`
  font-size: ${(props) => props.size || "3rem"};
  text-transform: uppercase;
  font-weight: bold;
  color: transparent;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
  /* &:hover {
    color: white;
  } */
  @media (max-width: 768px) {
    font-size: xx-large;
  }
`;

export default OutlineText;
