import styled from "styled-components";

function ProgramCard({ id, icon, title, description }) {
  return (
    <Container>
      <>{icon}</>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <span>Join Now</span>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </Container>
  );
}

export default ProgramCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  background-color: var(--gray);
  color: white;
  max-width: 15rem;
  /* min-width: 15rem; */
  margin-bottom: 3rem;
  transition: 0.3s;

  &:hover {
    background-image: var(--planCard);
    cursor: pointer;
  }

  > i {
    font-size: 1.7rem;
    /* width: 2rem; */
    /* fill: white; */
  }

  > h3 {
    font-size: 1rem;
  }

  > p {
    line-height: 25px;
    /* min-height: 8rem; */
    /* max-height: 10rem; */
    overflow: hidden;
  }

  > div span {
    margin-right: 2.5rem;
  }
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;
