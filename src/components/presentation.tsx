import styles from "./presentation.module.css"

import linkedinIcon from "../assets/linkedin.png"
import githubIcon from "../assets/github.png"

export function Presentation() {
    return (
        <div className={styles.presentation}>
            <h1 className={styles.name}>Hudson Santos</h1>

            <p className={styles.bio}><span>Um Desenvolvedor Front-end</span> que ama <br /> aprender tudo sobre Tecnologias Web!</p>

            <div className={styles.links}>
                <div className={styles.social}>
                    <a href="https://www.linkedin.com/in/hudsonsamuelsantos/" target="_blank">
                        <img src={linkedinIcon} alt="LinkedIn Icon" />
                    </a>

                    <a href="https://github.com/hudsonsamuelsantos" target="_blank">
                        <img src={githubIcon} alt="GitHub Icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}