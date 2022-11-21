import styles from './List.module.css'


export function List() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.created}>
          <strong>Tarefas criadas</strong>
          <span className={styles.created}>5</span>
        </div>

        <div className={styles.done}>
          <strong>Concluídas</strong>
          <span className={styles.done}>2 de 5</span>
        </div>
      </div>

      <div className={styles.task}>
        <input type="checkbox" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum libero dolor repellendus voluptas voluptatum. Autem fugit magnam ducimus nisi quaerat. Optio magnam distinctio.
        </p>
        
      </div>

      <div className={styles.task}>
        <input type="checkbox" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum libero dolor repellendus voluptas voluptatum. Autem fugit magnam ducimus nisi quaerat. Optio magnam distinctio.
        </p>
        
      </div>

      <div className={styles.task}>
        <input type="checkbox" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum libero dolor repellendus voluptas voluptatum. Autem fugit magnam ducimus nisi quaerat. Optio magnam distinctio.
        </p>
        
      </div>

      <div className={styles.task}>
        <input type="checkbox" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum libero dolor repellendus voluptas voluptatum. Autem fugit magnam ducimus nisi quaerat. Optio magnam distinctio.
        </p>
        
      </div>

      <div className={styles.task}>
        <input type="checkbox" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum libero dolor repellendus voluptas voluptatum. Autem fugit magnam ducimus nisi quaerat. Optio magnam distinctio.
        </p>
        
      </div>
    </div>
  )
}