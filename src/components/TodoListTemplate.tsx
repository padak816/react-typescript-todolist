import React, { useState } from "react";
import styled from "styled-components";
import Form from "./Form";
import TodoItemList from "./TodoItemList";

const Wraaper = styled.div`
  background: white;
  width: 512px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 0 auto;
  margin-top: 4rem;
`;

const Title = styled.div`
  padding: 2rem;
  font-size: 2.5rem;
  text-align: center;
  font-weight: 100;
  background: #3281e7;
  color: white;
`;

const SubTitle = styled.div`
  margin-top: 10px;
  font-size: 1rem;
`;

const FormWrapper = styled.section`
  padding: 1rem;
  border-bottom: 1px solid #3281e7;
`;

const Todos = styled.section`
  min-height: 5rem;
`;

type TodoList = { id: number; text: string; checked: boolean };

const TodoListTemplate = () => {
  const [todoList, setTodoList] = useState<TodoList[]>([
    { id: 0, text: " 자바스크립트", checked: true },
    { id: 1, text: " 리액트", checked: false },
  ]);
  const [nextId, setNextId] = useState<number>(2);
  const [input, setInput] = useState<string>("");

  const handleCreate = () => {
    setTodoList(
      todoList.concat({
        id: nextId,
        text: input,
        checked: false,
      })
    );

    setInput("");
    setNextId(nextId + 1);
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleCreate();
    }
  };

  return (
    <Wraaper>
      <Title>
        <div>오늘 할 일</div>
        <SubTitle>오늘 걷지 못하면 내일 뛰어야 한다..</SubTitle>
      </Title>
      <FormWrapper>
        <Form
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          handleCreate={handleCreate}
          handleKeyPress={handleKeyPress}
        />
      </FormWrapper>
      <Todos>
        <TodoItemList todoList={todoList} setTodoList={setTodoList} />
      </Todos>
    </Wraaper>
  );
};

export default TodoListTemplate;
