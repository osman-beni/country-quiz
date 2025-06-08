import React from "react";
import styled from "styled-components";

interface Props {
  score: number;
  totalQuestions: number;
}

function QuizHeader({ score, totalQuestions }: Props) {
  return (
    <QuizHeaderContainer>
      <Title>Country Quiz</Title>
      <TotalPoints>
        🏆 {score}/{totalQuestions} Points
      </TotalPoints>
    </QuizHeaderContainer>
  );
}

const QuizHeaderContainer = styled.header`
  display: flex;
  color: #e2e4f3;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;

const TotalPoints = styled.p`
  background-image: linear-gradient(to right, #e65895, #bc6be8);
  padding: 0.4rem 1rem;
  margin: 0;
  font-size: 0.875rem;
  border-radius: 16px;
`;

export default QuizHeader;
