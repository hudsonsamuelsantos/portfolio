import { Code } from 'phosphor-react'

import '../styles/Header.css'

export function Header() {

    return (
        <header>
            <Code size={32} />
            <a href="">Home</a>
            <a href="">Sobre</a>
            <a href="">Projetos</a>
            <a href="">Contato</a>
        </header>
    )
}