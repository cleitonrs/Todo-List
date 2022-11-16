import styles from './Input.module.css'
import { PlusCircle } from 'phosphor-react'

export function Input() {
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" placeholder="Adicione uma nova tarefa" />
      <button className={styles.button}>
        <strong>Criar</strong>
        <PlusCircle size={16} color="#fff" weight="bold" />
      </button>
    </form>
  )
}