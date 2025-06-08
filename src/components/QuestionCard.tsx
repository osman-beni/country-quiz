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
          <>
            Which country's flag is this{" "}
            <img style={{ width: 24 }} src={`${question.image}`} />
          </>
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
  gap: 24px;
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

const Option = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
  margin: 0;
  padding: 0 16px;
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

const Image = styled.img`
  width: 16px;
  height: 16px;
`;

export default QuestionCard;
