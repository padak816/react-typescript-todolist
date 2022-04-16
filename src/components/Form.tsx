import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
`;

const Input = styled.input`
  flex: 1;
  font-size: 1.25rem;
  outline: none;
  border: none;

  ::placeholder {
    color: rgb(202, 202, 202);
    font-style: italic;
  }
`;

const Button = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: 1rem;
  background: #3281e7;
  border-radius: 3px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background: #378eff;
  }
`;

type FormbProps = {
  value: string;
  onChange: (e: any) => void;
  handleCreate: (e: any) => void;
  handleKeyPress: (e: any) => void;
};

const Form = ({
  value,
  onChange,
  handleCreate,
  handleKeyPress,
}: FormbProps) => {
  return (
    <Wrapper>
      <Input
        placeholder="산책 가기"
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <Button onClick={handleCreate}>추가</Button>
    </Wrapper>
  );
};

export default Form;
