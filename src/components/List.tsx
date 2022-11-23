import styles from './List.module.css'
import check from '../assets/check.svg'
import checked  from '../assets/checked.svg'
import clipboard from '../assets/clipboard.svg'
import { TbTrash } from 'react-icons/tb'
import { TodosType } from '../App'

interface TodosProps {
  todos: TodosType[]
  onDeleteTodo: (todoId: string) => void
  onComplete: (todoId: string) => void
}

export function List({ todos, onDeleteTodo, onComplete }: TodosProps ) {
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
          <div className={styles.task} key={todo.id} >
            <button className={styles.check} onClick={() => onComplete(todo.id)}>
              {todo.isCompleted ? <img src={checked} /> : <img src={check} />}
            </button>
            <p className={todo.isCompleted ? styles.textCompleted : ''}>
              {todo.title}
            </p>
            <button className={styles.delete} onClick={() => onDeleteTodo(todo.id)}>
              <TbTrash size={20} />
            </button>
          </div>  
        ))}

        {todos.length <= 0 && (
          <div className={styles.noTodo}>
            <img src={clipboard} />
            <div>
              <h3>Você ainda não tem tarefas cadastradas</h3>
              <p>Crie tarefas e organize seus items a fazer</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}