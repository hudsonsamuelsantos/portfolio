import styles from './Footer.module.css'

export function Footer() {
    return (
        <div className={styles.footer}>
            <a href="">
                <span>github</span>
            </a>
            <a href="">
                <span>linkedin</span>
            </a>
            <a href="">
                <span>gmail</span>
            </a>
        </div>
    )
}