import { GithubLogo, LinkedinLogo } from 'phosphor-react'

import '../styles/Presentation.css'

export function Presentation() {

    return (
        <div className='Presentation'>
            <div className='MyPresentation'>
                <h1>Olá! Eu sou Hudson Santos <br />
                    <span>Desenvolvedor Front-End</span>
                </h1>
            </div>

            <div className='Social'>

                <div className='ProfileImage'>
                    <img src="https://github.com/hudsonsamuelsantos.png" alt="Hudson Santos" />
                </div>

                <div className='SocialLinks'>
                    <a href="">
                        <GithubLogo size={48} color='#ffffff' />
                        GitHub
                    </a>
                    <a href="">
                        <LinkedinLogo size={48} color='#ffffff' />
                        LinkedIn
                    </a>
                </div>
            </div>

        </div>
    )
}