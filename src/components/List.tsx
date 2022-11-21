import styles from './List.module.css'
import check from '../assets/check.svg'
import { TbClipboardText, TbTrash } from 'react-icons/tb'
import { BsFillCheckCircleFill } from 'react-icons/bs'

export function List() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.created}>
          <p>Tarefas criadas</p>
          <span className={styles.created}>5</span>
        </div>

        <div className={styles.done}>
          <p>Concluídas</p>
          <span className={styles.done}>2 de 5</span>
        </div>
      </div>

      <div className={styles.list}>
        <div className={styles.task}>
          <button className={styles.check}>
            <img src={check} alt="" />
          </button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum libero dolor repellendus voluptas voluptatum. Autem fugit magnam ducimus nisi quaerat. Optio magnam distinctio.
          </p>
          <button className={styles.delete}>
            <TbTrash size={20} />
          </button>
        </div>

        <div className={styles.task}>
          <button className={styles.check}>
            <img src={check} alt="" />
          </button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum libero dolor repellendus voluptas voluptatum. Autem fugit magnam ducimus nisi quaerat. Optio magnam distinctio.
          </p>
          <button className={styles.delete}>
            <TbTrash size={20} />
          </button>
        </div>

      </div>
    </div>
  )
}