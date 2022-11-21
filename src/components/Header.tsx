import styles from './Header.module.css'
import logo from '../assets/logo.svg'
import { AiOutlinePlusCircle } from 'react-icons/ai'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo do ToDo" />

      <form className={styles.inputTaskForm}>
        <input type="text" placeholder='Adicione uma nova tarefa' />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  )
} 