import styled from "styled-components";

const Btn = styled.button`
  padding: 0.5rem 1.5em;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.bgColor || "white"};
  color: ${(props) => props.textColor || "white"};
  width: ${(props) => props.width || ""};
  &:focus {
    outline: none;
  }
`;

export default Btn;

// const Container = styled.button`
//   background-color: white;
//   padding: 0.5rem;
//   font-weight: bold;
//   border: 4pc sold transparent;
//   transition: 300ms all;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
