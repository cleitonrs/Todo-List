import { useEffect, useState } from "react"
import { Header } from "./components/Header"
import { List } from "./components/List"
import { v4 as uuidv4 } from "uuid"
import './global.css'

const  SAVED_TODOS = "savedTodos"

export interface TodosType {
  id: string
  title: string
  isCompleted: boolean
}

export function App() {
  const [todos, setTodos] = useState<TodosType[]>([])

  function saveTodos(newTodos: TodosType[]) {
    setTodos(newTodos)
    localStorage.setItem(SAVED_TODOS, JSON.stringify(newTodos))
  }

  function loadSavedTodos() {
    const saved = localStorage.getItem(SAVED_TODOS)
    if (saved) {
      setTodos(JSON.parse(saved))
    }
  }

  useEffect(() => {
    loadSavedTodos()
  },[])

  function addTodo(todoTitle: string) {
    // Validation for no text or white space with regex
    if (!todoTitle || /^\s*$/.test(todoTitle)){
      return
    }
    saveTodos([
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
    saveTodos(newTodos)
  }

  function toggleCompletedTodo(todoId: string) {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
      }
    }
      return todo
    })
    saveTodos(newTodos)
  }

  return (
    <>
      <Header onAddTodo={addTodo} />
      <List todos={todos} onDeleteTodo={deleteTodo} onComplete={toggleCompletedTodo}/>
      <footer>
        <p>
        &copy; 
        <a href="http://www.github.com/cleitonrs" target="_blank" rel="noreferrer">Cleiton Santos Developer </a>
        {new Date().getFullYear()}. All rights reserved
        </p>
      </footer>
    </>
  )
}

export default App
