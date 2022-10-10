import { NavLink } from 'react-router-dom'

import styles from './Header.module.css'

export function Header() {

    return (
        <div className={styles.header}>

            <NavLink to={'/'} className={styles.logo}>hudson</NavLink>

            <nav className={styles.nav_links}>
                <NavLink to={"/about"} className={({ isActive }) => (isActive ? styles.is_active : '')}>ABOUT</NavLink>
                <NavLink to={"/projects"} className={({ isActive }) => (isActive ? styles.is_active : '')}>PROJECTS</NavLink>
                <NavLink to={"/contact"} className={({ isActive }) => (isActive ? styles.is_active : '')}>CONTACT</NavLink>
            </nav>
        </div>
    )
}