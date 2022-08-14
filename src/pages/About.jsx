import '../styles/About.css'

import React from 'react'

export function About() {
  return (
    <div className='about'>
      <div className='about-me'>
        <div className="text-about-me">
            <h1 className='title'>Um pouco sobre mim</h1>
            <p>Olá! <br />
             Meu nome é Hudson Santos, sou um Desenvolvedor Front-End que ama tecnologia. Atualmente estou em busca de evoluir constantemente minhas habilidades, e de
                uma oportunidade de mostrar e desenvolver ao máximo meu potencial no mercado de trabalho.
            </p>
        </div>

        <div className='skills'>
            <div className='skills-box'>
                <h2 className='title'>&gt; Habilidades</h2>

                <div className="skill-details">
                    <i className="devicon-react-original colored"></i>
                    <span>React JS</span>
                </div>
                <div className="skill-details">
                    <i className="devicon-javascript-plain colored"></i>
                    <span>JavaScript ES6</span>
                </div>
                <div className="skill-details">
                    <i className="devicon-css3-plain colored"></i>
                    <span>CSS</span>
                </div>
                <div className="skill-details">
                    <i className="devicon-html5-plain colored"></i>
                    <span>HTML</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

