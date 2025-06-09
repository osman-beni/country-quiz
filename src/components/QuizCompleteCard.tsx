import React from "react";
import styled from "styled-components";

interface Props {
  score: number;
  totalQuestions: number;
  onRestart?: () => void;
}

function QuizCompleteCard({ score, totalQuestions, onRestart }: Props) {
  return (
    <Wrapper>
      <Image src="/congrats.png" />
      <Title>Congrats! You completed the quiz.</Title>
      <p>
        You answered {score}/{totalQuestions} correctly
      </p>
      <Button onClick={onRestart}>Play again</Button>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  justify-content: center;
  background-color: #393f6e;
  color: #e2e4f3;
  border-radius: 8px;
  padding: 24px;
  text-align: center;
  max-width: 400px;
`;

const Title = styled.h2`
  font-weight: normal;
`;

const Image = styled.img`
  max-width: 100%;
`;

const Button = styled.button`
  background-image: linear-gradient(to right, #e65895, #bc6be8);
  font: inherit;
  color: inherit;
  padding: 1rem 4rem;
  border: none;
  border-radius: 8px;
  margin-top: 16px;
`;

export default QuizCompleteCard;
