import { useState } from "react"
import { Header } from "./components/Header"
import { List } from "./components/List"
import { v4 as uuidv4 } from "uuid"
import './global.css'

export interface TodosType {
  id: string
  title: string
  isCompleted: boolean
}

export function App() {
  const [todos, setTodos] = useState<TodosType[]>([
    {
      id: "teste",
      title: "Testando a aplicação",
      isCompleted: true,
    },
    {
      id: "teste2",
      title: "Testando a aplicação novamente",
      isCompleted: false,
    }
  ])

  function addTodo(todoTitle: string) {
    // Validation for no text or white space with regex
    if (!todoTitle || /^\s*$/.test(todoTitle)){
      return
    }
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        title: todoTitle,
        isCompleted: false,
      }
    ])
  }

  function deleteTodo(todoId: string) {
    const newTodos = todos.filter((todo) => todo.id !== todoId )
    setTodos(newTodos)
  }

  return (
    <>
      <Header onAddTodo={addTodo} />
      <List todos={todos} onDeleteTodo={deleteTodo} />
    </>
  )
}

export default App
