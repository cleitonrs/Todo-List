import styles from './List.module.css'
import check from '../assets/check.svg'
import { TbClipboardText, TbTrash } from 'react-icons/tb'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { TodosType } from '../App'

interface TodosProps {
  todos: TodosType[]
}

export function List({ todos }: TodosProps ) {
  const todosCount = todos.length
  const completedTodos = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.created}>
          <p>Tarefas criadas</p>
          <span className={styles.created}>{todosCount}</span>
        </div>

        <div className={styles.done}>
          <p>Concluídas</p>
          <span className={styles.done}>{completedTodos} de {todosCount}</span>
        </div>
      </div>

      <div className={styles.list}>
        {todos.map((todo) => (
          <div className={styles.task} key={todo.id}>
            <button className={styles.check}>
              <img src={check} alt="" />
            </button>
            <p>
              {todo.title}
            </p>
            <button className={styles.delete}>
              <TbTrash size={20} />
            </button>
          </div>  
        ))}

      </div>
    </div>
  )
}