import React from "react";

import styled from "styled-components";

import QuizHeader from "./QuizHeader";
import QuestionNumbers from "./QuestionNumbers";
import QuestionCard from "./QuestionCard";

function Quiz() {
  return (
    <Wrapper>
      <QuizHeader />
      <QuestionsWrapper>
        <QuestionNumbers />
        <QuestionCard />
      </QuestionsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
`;

export const QuestionsWrapper = styled.div`
  background-color: #343964;
  padding: 1rem;
  border-radius: 16px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default Quiz;
