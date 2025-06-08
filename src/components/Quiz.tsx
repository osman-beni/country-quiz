import React from "react";

import styled from "styled-components";

import QuizHeader from "./QuizHeader";
import QuestionNumbers from "./QuestionNumbers";
import QuestionCard from "./QuestionCard";
import useCountriesData from "../hooks/useCountriesData";
import { generateQuestions } from "../utils/generateQuestions";

function Quiz() {
  const { data, loading } = useCountriesData();
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [answered, setAnswered] = React.useState(false);
  const [questionKey, setQuestionKey] = React.useState(0); // To force remount
  const questions = React.useMemo(() => generateQuestions(data), [data]);
  const selectedQuestion = questions[currentQuestion];
  console.log(currentQuestion);

  React.useEffect(() => {
    if (!answered) return;
    const timeoutId = setTimeout(() => {
      setCurrentQuestion((prev) => prev + 1);
      setAnswered(false);
      setQuestionKey((k) => k + 1); // Force QuestionCard remount
    }, 2000); // 2 seconds delay
    return () => clearTimeout(timeoutId);
  }, [answered]);

  function chosenQuestionHandler() {
    setAnswered(true);
    // Optionally, you can handle scoring here
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  // Optionally, handle end of quiz
  if (!selectedQuestion) {
    return <div>Quiz Complete!</div>;
  }

  return (
    <Wrapper>
      <QuizHeader />
      <QuestionsWrapper>
        <QuestionNumbers
          numOfQuestions={questions.length}
          solvedQuestionsNum={currentQuestion}
        />
        <QuestionCard
          key={questionKey}
          onChoose={chosenQuestionHandler}
          question={selectedQuestion}
        />
      </QuestionsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 960px;
`;

export const QuestionsWrapper = styled.div`
  background-color: #343964;
  padding: 1rem;
  border-radius: 16px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 600px) {
    padding: 4rem 2rem;
  }
`;

export default Quiz;
