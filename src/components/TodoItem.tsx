import React from "react";
import styled, { css } from "styled-components";

const Items = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.15s;
  user-select: none;
  &:hover {
    background: #e3fafc;
  }
  border-top: 1px solid #f1f3f5;
`;
const Remove = styled.div`
  margin-right: 1rem;
  color: #e64980;
  font-weight: 600;
  opacity: 0;
  ${Items}:hover & {
    opacity: 1;
  }
`;
const CheckMark = styled.div`
  font-size: 1.5rem;
  line-height: 1rem;
  margin-left: 1rem;
  color: #3281e7;
  font-weight: 800;
`;
const Text = styled.div<{ checked: boolean }>`
  flex: 1;
  word-break: break-all;
  ${({ checked }) =>
    checked &&
    css`
      text-decoration: line-through;
      color: #adb5bd;
    `}
`;

type TodoItemProps = {
  text: string;
  checked: boolean;
  id: number;
  handleToggle: (id: number) => void;
  handleRemove: (id: number) => void;
};

const TodoItem = ({
  text,
  checked,
  id,
  handleToggle,
  handleRemove,
}: TodoItemProps) => {
  return (
    <Items onClick={() => handleToggle(id)}>
      <Remove
        className="remove"
        onClick={(e) => {
          e.stopPropagation();
          handleRemove(id);
        }}
      >
        &times;
      </Remove>
      <Text checked={checked}>{text}</Text>
      {checked && <CheckMark>✓</CheckMark>}
    </Items>
  );
};

export default TodoItem;
