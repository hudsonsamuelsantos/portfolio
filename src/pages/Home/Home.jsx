import styles from './Home.module.css'

import { GithubLogo, LinkedinLogo } from 'phosphor-react'
import { useRef } from 'react'

export function Home() {

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
        <div>
            <div>
                <div>
                    <h1 ref={title} className='title'>Hudson Santos</h1>
                </div>
            </div>
        </div>
    )
}