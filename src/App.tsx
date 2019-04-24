import React, { FunctionComponent, useState } from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./react-app-env";

const App: FunctionComponent = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [currentTodo, setCurrentTodo] = useState("");

  const todoProps = {
    todos,
    currentTodo,
    setCurrentTodo,
    setTodos
  };

  return (
    <div className="app-root">
      <InputTodo {...todoProps} />
      <TodoList {...todoProps} />
    </div>
  );
};

export default App;
