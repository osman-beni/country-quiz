import React from "react";

import styled from "styled-components";

import QuizHeader from "./QuizHeader";
import QuestionNumbers from "./QuestionNumbers";
import QuestionCard from "./QuestionCard";
import useCountriesData from "../hooks/useCountriesData";
import { generateQuestions } from "../utils/generateQuestions";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const { data, loading } = useCountriesData();
  const questions = React.useMemo(() => generateQuestions(data), [data]);
  const selectedQuestion = questions[currentQuestion];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <QuizHeader />
      <QuestionsWrapper>
        <QuestionNumbers numOfQuestions={questions.length} />
        <QuestionCard question={selectedQuestion} />
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
