import React, { FunctionComponent } from "react"
import "../App.css"
import { Todo } from "../react-app-env"

interface Props {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
  selected: string
  setSelected: (selected: string) => void
}

const TodoFooter: FunctionComponent<Props> = props => {
  const { todos, setTodos, selected, setSelected } = props

  const itemsLeft = () => {
    const uncompleted = todos.filter(todo => todo.completed === false)

    return uncompleted.length === 1
      ? `${uncompleted.length} item left`
      : `${uncompleted.length} items left`
  }

  const handleOption = (option: string) => {
    setSelected(option)
  }

  const handleClearCompleted = () => {
    setTodos(todos.filter(todo => todo.completed === false))
  }

  return (
    <>
      <div className="todoFooter">
        <div className="todo-count">{itemsLeft()}</div>
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
        {todos.filter(todo => todo.completed === true).length > 0 && (
          <div className="todo-right" onClick={() => handleClearCompleted()}>
            Clear Completed
          </div>
        )}
      </div>
    </>
  )
}

export default TodoFooter
