import React, { FunctionComponent, useState } from "react";
import "../App.css";
import { Todo } from "../react-app-env";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}

const TodoItem: FunctionComponent<Props> = props => {
  const { todo, todos, setTodos } = props;
  const [hover, setHover] = useState<boolean>(false);

  const formatDate = (date: Date) => {
    return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
  };

  const handleToggle = () => {
    setTodos(
      todos.map((todoIterated: Todo) => {
        if (todoIterated.id === todo.id) {
          return { ...todoIterated, completed: !todoIterated.completed };
        } else {
          return todoIterated;
        }
      })
    );
  };

  return (
    <>
      <div
        className="todoWrapper"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="toggle" onClick={() => handleToggle()}>
          {todo.completed ? <div className="checkmark">&#10003;</div> : null}
        </div>
        <div className="detailWrapper">
          <div
            className={todo.completed ? "detailCompleted" : "detailUncompleted"}
          >
            {todo.description}
          </div>
          <div className="detailInnerWrapper">
            <div
              className={
                todo.completed ? "detailCompleted" : "detailUncompleted"
              }
            >
              {formatDate(todo.createdDate)}
            </div>
            <div
              className="deleteTodo"
              onClick={() =>
                setTodos(
                  todos.filter(todoIterated => todoIterated.id !== todo.id)
                )
              }
            >
              {hover ? "x" : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
