import styles from './Footer.module.css'

function Footer() {
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

export default Footer
