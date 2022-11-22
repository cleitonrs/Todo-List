import styles from './Header.module.css'
import logo from '../assets/logo.svg'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { ChangeEvent, FormEvent, useState } from 'react'

interface OnAddTodoProps {
  onAddTodo: (todoTitle: string) => void
}

export function Header({onAddTodo}: OnAddTodoProps) {
  const [title, setTitle] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    onAddTodo(title)
    setTitle('')
  }

  function handleOnChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo do ToDo" />

      <form className={styles.inputTaskForm} onSubmit={handleSubmit}>
        <input type="text" placeholder='Adicione uma nova tarefa' onChange={handleOnChangeTitle} value={title}/>
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  )
} 