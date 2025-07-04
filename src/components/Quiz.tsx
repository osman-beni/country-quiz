import React from "react";

import styled from "styled-components";

import QuizHeader from "./QuizHeader";
import QuestionNumbers from "./QuestionNumbers";
import QuestionCard from "./QuestionCard";
import useCountriesData from "../hooks/useCountriesData";
import { generateQuestions } from "../utils/generateQuestions";
import QuizCompleteCard from "./QuizCompleteCard";

function Quiz() {
  const { data, loading } = useCountriesData();
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [answered, setAnswered] = React.useState(false);
  const [questionKey, setQuestionKey] = React.useState(0); // To force remount
  const [score, setScore] = React.useState(0); // Track correct answers
  const [quizSeed, setQuizSeed] = React.useState(Date.now()); // To reset quiz
  const questions = React.useMemo(
    () => generateQuestions(data),
    [data, quizSeed]
  );
  const selectedQuestion = questions[currentQuestion];

  React.useEffect(() => {
    if (!answered) return;
    const timeoutId = setTimeout(() => {
      setCurrentQuestion((prev) => prev + 1);
      setAnswered(false);
      setQuestionKey((k) => k + 1); // Force QuestionCard remount
    }, 2000); // 2 seconds delay
    return () => clearTimeout(timeoutId);
  }, [answered]);

  function chosenQuestionHandler(choice: string) {
    setAnswered(true);
    if (choice === selectedQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {selectedQuestion && (
        <Wrapper>
          <QuizHeader score={score} totalQuestions={questions.length} />
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
      )}
      {!selectedQuestion && (
        <QuizCompleteCard
          score={score}
          totalQuestions={questions.length}
          onRestart={() => {
            setCurrentQuestion(0);
            setAnswered(false);
            setQuestionKey(0);
            setScore(0);
            setQuizSeed(Date.now()); // Reset quiz seed to regenerate questions
          }}
        />
      )}
    </>
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
  padding: 2rem 1rem;

  @media (min-width: 600px) {
    padding: 4rem 2rem;
  }
`;

export default Quiz;
