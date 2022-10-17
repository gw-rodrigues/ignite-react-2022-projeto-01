import { Trash, ThumbsUp } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/gw-rodrigues.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gleydson W. Rodrigues</strong>
              <time
                title="16 de Outubro 2022 às 12:00h"
                dateTime="2022-10-16 12:00:00"
              >
                Cerca 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
