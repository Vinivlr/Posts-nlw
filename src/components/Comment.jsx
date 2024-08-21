import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/vinisousadev.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vinicius Sousa</strong>
                            <time title="08 de Maio às 11:33h" dateTime="2024-08-05 11:33:30">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />

                        </button>
                    </header>

                    <p>Muito bom Vinicius, parabéns!! 👏👏</p>
                </div>
                <footer>
                
                    <button>
                        <ThumbsUp />
                    Aplaudir <span>20</span>

                    </button>
                </footer>
            </div>
        </div>
    )
}