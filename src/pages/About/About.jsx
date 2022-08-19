import styles from './About.module.css'

import React from 'react'

export function About() {
  return (
    <div>
      <h1>About me.</h1>
      <div className={styles.about}>
        <img src="https://github.com/hudsonsamuelsantos.png" alt="Profile image" />
        <p>Sou um Desenvolvedor Front-End que ama tecnologia. Atualmente estou em busca de evoluir constantemente minhas habilidades, e de uma oportunidade de mostrar e desenvolver ao máximo meu potencial no mercado de trabalho.</p>
      </div>
    </div>
  )
}

