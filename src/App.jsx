import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Projects } from './pages/Projects/Projects'
import { Contact } from './pages/Contact/Contact'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App