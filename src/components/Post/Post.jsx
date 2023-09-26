import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Post.module.css";


export function Post({author, publishedAt, content}) {
  const publishedDateFormatted = format(publishedAt,"d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
    locale: ptBR,
    addSuffix: true
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder  className={styles.avatar}
            src={author.avatarUrl}/>
            
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title="10 de setembro de 2023" dateTime={publishedAt.toISOString()}>
        {publishedDateRelativeToNow}
        </time>
      </header>
     
      <div className={styles.content}>
      {content.map(line => {
        if (line.type === 'paragraph'){
          return <p>{line.content}</p>;
        } else if (line.type ==='link'){
          return <p><a href="#">{line.content}</a></p>
        }
      })}
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
