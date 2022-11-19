import styles from "./app.module.css"

import { Nav } from "./components/nav"
import { Presentation } from "./components/presentation"

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <header>
          <nav className={styles.nav}>
            <Nav />
          </nav>
        </header>

        <main>
          <Presentation />
        </main>
      </div>
    </div>
  )
}

export default App
