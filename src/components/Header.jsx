import { RocketLaunch } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import styles from './Header.module.css'

export function Header() {

    return (
        <header className={styles.header}>
            <a href="/">&lt;hudson/&gt;</a>

            <nav className={styles.nav_links}>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>Sobre</NavLink>
                <NavLink to={"/projects"}>Projetos</NavLink>
                <NavLink to={"/contact"}>Contato</NavLink>
            </nav>
        </header>
    )
}