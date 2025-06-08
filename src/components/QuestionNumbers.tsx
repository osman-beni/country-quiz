import React from "react";
import styled from "styled-components";

import { range } from "../utils/range";

function QuestionNumbers() {
  return (
    <Wrapper>
      {range(10).map((num) => (
        <Number key={num}>{num}</Number>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
`;

const Number = styled.span`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  border-radius: 50%;
  background-color: #393f6e;
  margin-right: 0.5rem;
`;

export default QuestionNumbers;
