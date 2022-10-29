import React from "react";
import styled from "styled-components";

import SectionContainer from "../../UI/SectionContainer";
import ExploreText from "../../stories/ExploreText";
import PlanCard from "./PlanCard";

import { plansData } from "../../data/plansData";
import { BlurBackground } from "../../UI/BlurBackground";

function Plans() {
  return (
    <PlansContainer id="plans">
      <ExploreText
        text1="ready to start"
        text2="your journey"
        text3="now withus ?"
        fontSize="2.8rem"
      />
      <div>
        {plansData.map((plan, i) => (
          <PlanCard
            key={i}
            id={i}
            icon={plan.icon}
            name={plan.name}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>
      <BlurBackground width="32rem" height="23rem" top="0" />
      <BlurBackground width="32rem" height="23rem" top="10rem" right="0" />
    </PlansContainer>
  );
}

export default Plans;
const PlansContainer = styled(SectionContainer)`
  position: relative;
  > div:nth-of-type(2) {
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 3rem;
    padding: 0 2rem;
    margin-top: 5rem;
    > div {
      min-width: 250px;
    }
  }
`;
