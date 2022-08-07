import { RocketLaunch } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import '../styles/Header.css'

export function Header() {

    return (
        <header className='header'>
            <RocketLaunch className='icon' size={64} />

            <nav className='links'>
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/about"}>Sobre</NavLink>
                <NavLink to={"/projects"}>Projetos</NavLink>
                <NavLink to={"/contact"}>Contato</NavLink>
            </nav>
        </header>
    )
}