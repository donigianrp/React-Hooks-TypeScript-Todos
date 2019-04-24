import React, { Component } from "react"
import "./App.css"
import InputTodo from "./components/InputTodo"
import TodoList from "./components/TodoList"
import { Todo } from "./react-app-env"

interface AppState {
  todos: Todo[]
  currentTodo: string
}

class App extends Component<{}, AppState> {
  state: AppState = {
    todos: [],
    currentTodo: ""
  }

  setTodos = (todos: Todo[]) => {
    this.setState({ todos })
  }

  setCurrentTodo = (todo: string) => {
    this.setState({ currentTodo: todo })
  }

  render() {
    const { todos, currentTodo } = this.state
    const { setCurrentTodo, setTodos } = this
    const todoProps = {
      todos,
      currentTodo,
      setCurrentTodo,
      setTodos
    }
    return (
      <div className="app-root">
        <InputTodo {...todoProps} />
        <TodoList {...todoProps} />
      </div>
    )
  }
}

export default App
