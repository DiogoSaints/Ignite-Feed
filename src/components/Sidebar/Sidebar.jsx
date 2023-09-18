import { PencilLine } from 'phosphor-react';
import styles from './sidebar.module.css';
import { Avatar } from '../Avatar/Avatar';


export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="https://img.freepik.com/vetores-gratis/fundo-mistico-de-pixel-art_52683-87349.jpg?w=500&t=st=1694275839~exp=1694276439~hmac=e26efb2668744e9e3de568fec7284dd9d68f7fabbfde6ad6fe3ad94a77809e8d"/>
            
            <div className={styles.profile}>
            <Avatar hasBorder={true} className={styles.Avatar} src="https://github.com/diogosaints.png"/>

                
                <strong>Diogo Santos</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}