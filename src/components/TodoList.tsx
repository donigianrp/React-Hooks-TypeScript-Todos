import React, { FunctionComponent, useState } from "react";
import "../App.css";
import { Todo } from "../react-app-env";
import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter";

interface Props {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

const InputTodo: FunctionComponent<Props> = props => {
  const { todos, setTodos } = props;
  const [selected, setSelected] = useState<string>("");

  const handleDisplayed = () => {
    if (selected === "Active") {
      return todos.filter(todo => todo.completed === false);
    } else if (selected === "Completed") {
      return todos.filter(todo => todo.completed === true);
    } else {
      return todos;
    }
  };

  const todoProps = {
    todos,
    setTodos,
    selected,
    setSelected
  };

  return (
    <>
      {handleDisplayed().map(todo => (
        <TodoItem key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
      ))}
      <TodoFooter {...todoProps} />
    </>
  );
};

export default InputTodo;
