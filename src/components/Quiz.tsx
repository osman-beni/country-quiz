import React from "react";

import styled from "styled-components";

import QuizHeader from "./QuizHeader";

function Quiz() {
  return (
    <Wrapper>
      <QuizHeader />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
`;

export default Quiz;
