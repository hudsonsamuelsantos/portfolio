import '../styles/Home.css'
import { Presentation } from './ Presentation'
import { Header } from './Header'

export function Home() {

    return (
        <div className='Home'>
            <header>
                <Header />
            </header>

            <main>
                <Presentation />
            </main>
        </div>
    )
}