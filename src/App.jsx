import './App.css'
import AppHeader from './components/AppHeader'
import WayToTeach from './components/WayToTeach'
import { info } from './data'



const App = () => {
  return (
    <>
    <AppHeader />

    <main>
      <section>
        <h3>Наш подход к обучению</h3>

        <ul>
          <WayToTeach info={info} />
         
        </ul>
      </section>
    </main>
      
    </>
  )
}

export default App
 