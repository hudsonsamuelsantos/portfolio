import { RocketLaunch } from 'phosphor-react'
import { Link } from 'react-router-dom'

import '../styles/Header.css'

export function Header() {

    return (
        <header className='header'>
            <RocketLaunch className='icon' size={64} />

            <nav className='links'>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>Sobre</Link>
                <Link to={"/projects"}>Projetos</Link>
                <Link to={"/contact"}>Contato</Link>
            </nav>
        </header>
    )
}