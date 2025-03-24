import './App.css'
import AppHeader from './components/AppHeader'
import Button from './components/Button/Button'
import WayToTeach from './components/WayToTeach'
import { info } from './data'



const App = () => {
  return (
    <>
    <AppHeader />

    <main style={{padding:'0 50px'}}>
      <section>
        <h3>Наш подход к обучению</h3>
        <ul>
          <WayToTeach info={info} />
        </ul>
        <h3>Чем мы отличаемся от других</h3>
        <div style={{display:'flex',justifyContent:'center'}}>
        <Button>Подход</Button>
        <Button>Доступность</Button>
        <Button>Концентрация</Button>
        </div>
      </section>
    </main>
      
    </>
  )
}

export default App
 