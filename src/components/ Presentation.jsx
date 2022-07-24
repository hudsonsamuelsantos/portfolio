import { GithubLogo, LinkedinLogo } from 'phosphor-react'

import '../styles/Presentation.css'

export function Presentation() {

    return (
        <div className='Presentation'>
            <div className='MyPresentation'>
                <h1>Olá!<br />
                    Eu sou Hudson Santos<br />
                    Desenvolvedor Front-End
                </h1>
            </div>

            <div className='Social'>

                <div className='ProfileImage'>
                    <img src="https://github.com/hudsonsamuelsantos.png" alt="Hudson Santos" />
                </div>

                <div className='SocialLinks'>
                    <a href="https://github.com/hudsonsamuelsantos" target="_blank">
                        <GithubLogo size={48} color='#ffffff' />
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/hudsonsamuelsantos/" target="_blank">
                        <LinkedinLogo size={48} color='#ffffff' />
                        LinkedIn
                    </a>
                </div>
            </div>

        </div>
    )
}