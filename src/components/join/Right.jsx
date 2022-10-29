import styled from "styled-components";
import { useRef } from "react";
import Btn from "../../UI/Btn";
import emailjs from "@emailjs/browser";

function Right() {
  const enteredEmail = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qp4yhgs",
        "template_asqxr1i",
        enteredEmail.current,
        "kPMymlqm7DIWZKb7d"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <RightContainer>
      <form ref={enteredEmail} onSubmit={sendEmail}>
        <input
          type="email"
          name="user_email"
          placeholder="Enter Your Email Address her"
        />
        <Btn bgColor="#f48915">Join now</Btn>
      </form>
    </RightContainer>
  );
}

export default Right;
const RightContainer = styled.div`
  flex: 1;
  display: flex;
  /* justify-content: center; */
  align-items: center;

  > form {
    background-color: var(--gray);
    padding: 1rem;
    position: relative;
    /* left: 5rem; */

    input {
      background-color: transparent;
      color: white;
      border: none;
      outline: none;
      margin-right: 2rem;

      &::placeholder {
        color: var(--lightgray);
      }
    }
    @media (max-width: 1200px) {
      margin: auto;
    }
    @media (max-width: 500px) {
      input {
        margin-right: 0;
      }
    }
  }
`;
