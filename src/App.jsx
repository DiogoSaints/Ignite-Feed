import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";

import "./global.css";
import styles from './App.module.css'


// eslint-disable-next-line no-unused-vars
const posts = [
  { id: 1,
  author:{
    avatarUrl: '	https://github.com/diogosaints.png',
    name: 'Diogo Santos',
    role: 'Web Developer'
  },
  content:[     
    {type:'paragraph', content: 'Lorem ipsum dolor 👋' },
    {type:'paragraph', content: 'sit amet consectetur adipisicing elit. Veniam, eligendi reprehende'},
    {type:'Link', content:'👉adasdad@.com.br'},
  ],
  publishedAt: new Date('2023-09-17')
  },
  { id: 2,
    author:{
      avatarUrl: '	https://github.com/diogosaints.png',
      name: 'Santos Diogo',
      role: 'Web Developer'
    },
    content:[     
      {type:'paragraph', content: 'Lorem ipsum dolor 👋' },
      {type:'paragraph', content: 'sit amet consectetur adipisicing elit. Veniam, eligendi reprehende'},
      {type:'Link', content:'👉adasdad@.com.br'},
    ],
    publishedAt: new Date('2023-09-17')
    },
];




export function App() {
  return (
    <div>
                <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
         {posts.map(post =>{
          return (
            <Post 
            author={post.author}
            content={post.content}  
            publishedAt={post.publishedAt}
          />)
         })}

        </main>
      </div>
    </div>
  );
}
