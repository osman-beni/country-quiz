import React from "react";
import styled from "styled-components";

import { range } from "../utils/range";

interface NumOfQuestionsSolved {
  solved: boolean;
}

function QuestionNumbers({
  numOfQuestions,
  solvedQuestionsNum,
}: {
  numOfQuestions: number;
  solvedQuestionsNum: number;
}) {
  return (
    <Wrapper>
      {range(numOfQuestions).map((num) => (
        <Number solved={num <= solvedQuestionsNum} key={num}>
          {num}
        </Number>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`;

const Number = styled.span<NumOfQuestionsSolved>`
  display: inline-block;
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  border-radius: 50%;
  background: ${({ solved }) =>
    solved ? "linear-gradient(to right, #e65895, #bc6be8)" : "#393f6e"};
  margin-right: 0.5rem;

  @media (min-width: 600px) {
    width: 48px;
    height: 48px;
    line-height: 48px;
  }
`;

export default QuestionNumbers;
