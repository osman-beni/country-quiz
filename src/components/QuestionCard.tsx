import React from "react";

import type { Question } from "../utils/generateQuestions";

import styled from "styled-components";

interface Props {
  question: Question;
  onChoose: (answer: string) => void;
}

function QuestionCard({ question, onChoose }: Props) {
  const [selected, setSelected] = React.useState<string | null>(null);

  const handleChoose = (option: string) => {
    if (selected) return; // Prevent changing answer after selection
    setSelected(option);
    onChoose(option);
  };

  return (
    <Wrapper>
      <QuestionText>
        {question.type === "flag" ? (
          <FlagQuestionWrapper>
            <span>Which country's flag is this</span>
            <img style={{ width: 48 }} src={`${question.image}`} />
          </FlagQuestionWrapper>
        ) : (
          question.prompt
        )}
      </QuestionText>
      <Options>
        {question.options.map((option, index) => {
          let showImage = false;
          let imageSrc = "";
          if (selected) {
            if (option === question.answer) {
              showImage = true;
              imageSrc = "/Check_round_fill.svg";
            } else if (option === selected) {
              showImage = true;
              imageSrc = "/Close_round_fill.svg";
            }
          }
          return (
            <Option
              key={index}
              value={option}
              onClick={() => handleChoose(option)}
              selected={selected === option}
            >
              <span>{option}</span>
              <Image
                src={imageSrc ? imageSrc : undefined}
                style={{ opacity: showImage ? 1 : 0 }}
                alt=""
              />
            </Option>
          );
        })}
      </Options>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin-top: 32px;
`;

const FlagQuestionWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const QuestionText = styled.h2`
  text-align: center;
  font-weight: 600;
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

const Option = styled.li<{
  selected?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
  margin: 0;
  padding: 4px;
  min-height: 48px;
  line-height: 48px;
  background-color: #393f6e;
  color: #e2e4f3;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  background: ${({ selected }) =>
    selected ? 'linear-gradient(to right, #e65895, #bc6be8)' : '#393f6e'};

  @media (min-width: 600px) {
    padding: 16px;
  }
`;

const Image = styled.img`
  width: 16px;
  height: 16px;
`;

export default QuestionCard;
