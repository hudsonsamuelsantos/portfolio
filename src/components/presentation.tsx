import styles from "./presentation.module.css"

import { useState } from "react"

import linkedinIcon from "../assets/linkedin.png"
import githubIcon from "../assets/github.png"
import clipIcon from "../assets/clip.png"
import clipWhiteIcon from "../assets/clip-white.png"

export function Presentation() {
    const [btnHover, setBtnHover] = useState<boolean>(false)

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

                <a
                    href=""
                    className={styles.button}
                    onMouseEnter={() => setBtnHover(true)}
                    onMouseLeave={() => setBtnHover(false)}
                >
                    <img src={!btnHover ? clipIcon : clipWhiteIcon} alt="Clip Icon" />

                    <span>Download CV</span>
                </a>
            </div>
        </div>
    )
}