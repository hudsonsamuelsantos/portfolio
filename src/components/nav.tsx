import styles from "./nav.module.css"

export function Nav() {
    return (
        <div className={styles.nav}>
            <a href="" className={styles.homeLink}>Home</a>
            <a href="" className={styles.link}>Portfolio</a>
            <a href="" className={styles.link}>Sobre mim</a>
            <a href="" className={styles.link}>Contato</a>
        </div>
    )
}