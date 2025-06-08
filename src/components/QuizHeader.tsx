import React from "react";
import styled from "styled-components";

function QuizHeader() {
  return (
    <QuizHeaderContainer>
      <h1>Country Quiz</h1>
      <TotalPoints>🏆 1/10 Points</TotalPoints>
    </QuizHeaderContainer>
  );
}

const QuizHeaderContainer = styled.header`
  display: flex;
  color: #e2e4f3;
  justify-content: space-between;
  align-items: center;
`;

const TotalPoints = styled.p`
  background-image: linear-gradient(to right, #e65895, #bc6be8);
  padding: 0.5rem 1rem;
  margin: 0;
  font-size: 0.875rem;
  border-radius: 16px;
`;

export default QuizHeader;
