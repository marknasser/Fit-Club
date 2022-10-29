import styled from "styled-components";
import tick from "../assets/tick.png";

export const UL_List = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  li {
    text-transform: uppercase;
    font-weight: bold;
    /* list-style-image: url(${tick}); */
    /* background: url(${tick}) no-repeat left top; */
    background: url(${(props) => props.url || tick}) no-repeat left top
      ${(props) => props.imgTop || ""};
    background-size: ${(props) => props.size || " 2rem"};
    height: 34px;
    padding-top: 7px;
    padding-left: 44px;
  }
`;
