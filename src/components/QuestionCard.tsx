import React from "react";

import styled from "styled-components";

function QuestionCard() {
  return (
    <Wrapper>
      <QuestionText>Which country does this flag belong to?</QuestionText>
      <Options>
        <Option>Sweden</Option>
        <Option>Vietnam</Option>
        <Option>Finland</Option>
        <Option>Austria</Option>
      </Options>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const QuestionText = styled.p`
  text-align: center;
`;

const Options = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  width: 100%;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Option = styled.li`
  text-align: center;
  margin: 0;
  height: 48px;
  line-height: 48px;
  background-color: #393f6e;
  color: #e2e4f3;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4a4f8b;
  }
`;

export default QuestionCard;
