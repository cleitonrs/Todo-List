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
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        title: todoTitle,
        isCompleted: false,
      }
    ])
  }

  return (
    <>
      <Header onAddTodo={addTodo} />
      <List todos={todos} />
    </>
  )
}

export default App
