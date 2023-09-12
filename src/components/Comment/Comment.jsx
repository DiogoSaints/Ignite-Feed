import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/diogosaints.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            
            <header>
                <div className={styles.authorAndTime}>
                    <strong>Diogo Santos</strong>
                    <time title="10 de setembro de 2023" dateTime="2023-09-10 00:09:30">A cerca de 1 hora atrás</time>
                </div>
                <button title="Deletar comentário">
                    <Trash size={24}/>
                </button>
            </header>
                <p>Lorem, ipsum dolor sit amet consectetur!</p>
        </div>
      
      <footer>
        <button>
            <ThumbsUp/>
            Aplaudir<span>20</span>
        </button>
      </footer>
      
      </div>
    </div>
  );
}
