import styles from './Home.module.css'

import { GithubLogo, LinkedinLogo } from 'phosphor-react'

export function Home() {

    return (
        <div className={styles.home}>
            <h1>Hudson Santos</h1>
            <p className={styles.paragraph}>
                <strong>Front-End Developer.</strong>
                <br />
                A programming student focused on the Javascript and React JS ecosystem.
            </p>
        </div>
    )
}