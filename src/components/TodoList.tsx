import React, { FunctionComponent, useState } from "react";
import "../App.css";
import { Todo } from "../react-app-env";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

const InputTodo: FunctionComponent<Props> = props => {
  const { todos, setTodos } = props;
  const [selected, setSelected] = useState<string>("");

  const itemsLeft = () => {
    const uncompleted = todos.filter(todo => todo.completed === false);

    return uncompleted.length === 1
      ? `${uncompleted.length} item left`
      : `${uncompleted.length} items left`;
  };

  const handleOption = (option: string) => {
    setSelected(option);
  };

  const handleDisplayed = () => {
    if (selected === "Active") {
      return todos.filter(todo => todo.completed === false);
    } else if (selected === "Completed") {
      return todos.filter(todo => todo.completed === true);
    } else {
      return todos;
    }
  };

  return (
    <>
      {handleDisplayed().map(todo => (
        <TodoItem key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
      ))}
      <div className="todoFooter">
        <div>{itemsLeft()}</div>
        <div className="filter">
          <div
            className={selected === "All" ? "active" : "option"}
            onClick={() => handleOption("All")}
          >
            All
          </div>
          <div
            className={selected === "Active" ? "active" : "option"}
            onClick={() => handleOption("Active")}
          >
            Active
          </div>
          <div
            className={selected === "Completed" ? "active" : "option"}
            onClick={() => handleOption("Completed")}
          >
            Completed
          </div>
        </div>
      </div>
    </>
  );
};

export default InputTodo;
