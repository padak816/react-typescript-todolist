import React, { Dispatch, SetStateAction } from "react";
import TodoItem from "./TodoItem";

type TodoList = { id: number; text: string; checked: boolean };

type TodoItemListProps = {
  todoList: TodoList[];
  setTodoList: Dispatch<SetStateAction<TodoList[]>>;
};

const TodoItemList = ({ todoList, setTodoList }: TodoItemListProps) => {
  const handleToggle = (id: number) => {
    const index = todoList.findIndex((todo: any) => todo.id === id);
    const selected = todoList[index];

    const nextTodos = [...todoList];

    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };
    setTodoList(nextTodos);
  };

  const handleRemove = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <>
      {todoList.map((v) => (
        <TodoItem
          text={v.text}
          checked={v.checked}
          id={v.id}
          handleToggle={handleToggle}
          handleRemove={handleRemove}
        />
      ))}
    </>
  );
};

export default TodoItemList;
