import { NavLink } from 'react-router-dom'

import styles from './Header.module.css'

export function Header() {

    return (
        <div className={styles.header}>
            
            <NavLink to={'/'} className={styles.logo}>hudson</NavLink>

            <nav className={styles.nav_links}>
                <NavLink to={"/about"} className={({ isActive }) => (isActive ? styles.is_active : '')}>SOBRE</NavLink>
                <NavLink to={"/projects"} className={({ isActive }) => (isActive ? styles.is_active : '')}>PROJETOS</NavLink>
                <NavLink to={"/contact"} className={({ isActive }) => (isActive ? styles.is_active : '')}>CONTATO</NavLink>
            </nav>
        </div>
    )
}