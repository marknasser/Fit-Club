/* eslint-disable no-unused-vars */
import styled from "styled-components";

import ProgramCard from "./ProgramCard";
import programsData from "../../data/programsData";

const DUMMY_PLANS = [
  {
    id: Math.random(),
    icon: <i class="fa-solid fa-dumbbell"></i>,
    title: "Strength Training",
    description:
      "in this program, you are trained to improve your strength through many exercises.",
  },
  {
    id: Math.random(),
    icon: <i class="fa-solid fa-person-running"></i>,
    title: "Strength Training",
    description:
      "in this program, you are trained to do sequential moves in range of 20 until 30 minutes.",
  },
  {
    id: Math.random(),
    icon: <i class="fa-solid fa-fire"></i>,
    title: "Strength Training",
    description:
      "in this program is suitable for you wgo wants to get rid of your fat and lose their weight.",
  },
  {
    id: Math.random(),
    icon: <i class="fa-solid fa-heart-pulse"></i>,
    title: "Strength Training",
    description:
      "in this program is designed for those who exercises only for their body fitness not body building.",
  },
];
function ProgramsCategories() {
  return (
    <Container>
      {DUMMY_PLANS.map((plane) => (
        <ProgramCard
          key={plane.id}
          id={plane.id}
          icon={plane.icon}
          title={plane.title}
          description={plane.description}
        />
      ))}
    </Container>
  );
}

export default ProgramsCategories;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
`;
