import styles from "./presentation.module.css"

export function Presentation() {
    return (
        <div className={styles.presentation}>
            <h1 className={styles.name}>Hudson Santos</h1>

            <p className={styles.bio}><span>Um Desenvolvedor Front-end</span> que ama <br /> aprender tudo sobre Tecnologias Web!</p>
        </div>
    )
}