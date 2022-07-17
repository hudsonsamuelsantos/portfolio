import { Planet } from 'phosphor-react'

import '../styles/Header.css'

export function Header() {

    return (
        <div className='Header'>
            <Planet className='Icon' size={64} />

            <div className='Links'>
                <a href="">Home</a>
                <a href="">Sobre</a>
                <a href="">Projetos</a>
                <a href="">Contato</a>
            </div>
        </div>
    )
}