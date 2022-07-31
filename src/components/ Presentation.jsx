import { GithubLogo, LinkedinLogo } from 'phosphor-react'
import { useRef } from 'react'

import '../styles/Presentation.css'

export function Presentation() {

    const title = useRef(null)

    function typeWrite(elemento){
        const textoArray = elemento.innerText.split('');
        elemento.innerText = null
        textoArray.forEach(function(letra, i){   
          
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 55 * i)
    
        })


    }

    { setInterval(function() {title.current != null ? typeWrite(title.current) : null}, 9000) }
    return (
        <div className='Presentation'>
            <div className='MyPresentation'>
                <h1 ref={title} className='title'>Olá!
                    Eu sou Hudson Santos
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