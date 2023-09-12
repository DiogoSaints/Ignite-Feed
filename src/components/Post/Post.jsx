import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/diogosaints.png"
          ></img>
          <div className={styles.authorInfo}>
            <strong>Diogo Santos</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="10 de setembro de 2023" dateTime="2023-09-10 00:09:30">
          Publicado há 1H
        </time>
      </header>
      <div className={styles.content}>
        <p>Lorem ipsum dolor 👋</p>
        <p>
          sit amet consectetur adipisicing elit. Veniam, eligendi reprehende
        </p>
        <p>
          👉 <a href="">adasdad@.com.br</a>
        </p>
        <p>
          <a href="#">#novo projeto</a> <a href="#">#rocketseat</a>{" "}
          <a href="#">#nlw</a>{" "}
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu comenario</strong>
        <textarea placeholder="Deixe um comentario" />
        <footer>
          <button type="subimit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}></div>
      <Comment/>
      <Comment/>
      <Comment/>
    </article>
  );
}
