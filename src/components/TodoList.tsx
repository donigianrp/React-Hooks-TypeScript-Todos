import React, { FunctionComponent, useState, useEffect } from "react";
import "../App.css";
import { Todo } from "../react-app-env";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  displayed: Todo[];
  setTodos: (todos: Todo[]) => void;
  setDisplayed: (todos: Todo[]) => void;
}

const InputTodo: FunctionComponent<Props> = props => {
  const { todos, displayed, setDisplayed, setTodos } = props;
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    if (selected === "Active") {
      setDisplayed(todos.filter(todo => todo.completed === false));
    } else if (selected === "Completed") {
      setDisplayed(todos.filter(todo => todo.completed === true));
    } else {
      setDisplayed(todos);
    }
  }, [todos]);

  const itemsLeft = () => {
    const uncompleted = todos.filter(todo => todo.completed === false);

    return uncompleted.length === 1
      ? `${uncompleted.length} item left`
      : `${uncompleted.length} items left`;
  };
  const handleOption = (option: string) => {
    // selected === option ? setSelected("") :
    setSelected(option);
    if (option === "Active") {
      setDisplayed(todos.filter(todo => todo.completed === false));
    } else if (option === "Completed") {
      setDisplayed(todos.filter(todo => todo.completed === true));
    } else {
      setDisplayed(todos);
    }
  };

  return (
    <>
      {displayed.map(todo => (
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
