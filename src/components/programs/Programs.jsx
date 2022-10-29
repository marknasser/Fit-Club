import styled from "styled-components";

import ExploreText from "../../stories/ExploreText";
import ProgramsCategories from "./ProgramsCategories";
import SectionContainer from "../../UI/SectionContainer";

function Programs() {
  return (
    <ProgramsContainer id="programs">
      <ExploreText text1="explore our" text2="programs" text3="to shape you" />
      <ProgramsCategories />
    </ProgramsContainer>
  );
}

export default Programs;

const ProgramsContainer = styled(SectionContainer)``;
