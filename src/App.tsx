import styles from "./app.module.css"

import { Nav } from "./components/nav"

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <header>
          <nav className={styles.nav}>
            <Nav />
          </nav>
        </header>
      </div>
    </div>
  )
}

export default App
