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
`;

const Number = styled.span<NumOfQuestionsSolved>`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  border-radius: 50%;
  background: ${({ solved }) =>
    solved ? "linear-gradient(to right, #e65895, #bc6be8)" : "#393f6e"};
  margin-right: 0.5rem;
`;

export default QuestionNumbers;
