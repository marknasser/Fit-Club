import styled from "styled-components";

export const BlurBackground = styled.div`
  background: rgb(253, 120, 43, 0.69);
  position: absolute;
  border-radius: 50%;
  filter: blur(${(props) => props.blur || "150px"});
  z-index: -9;
  width: ${(props) => props.width || "22rem"};
  height: ${(props) => props.height || "30rem"};
  left: ${(props) => props.left || "none"};
  right: ${(props) => props.right || "none"};
  top: ${(props) => props.top || "none"};
  bottom: ${(props) => props.bottom || "none"};
`;
