import { useState } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import Button from './components/Button/Button'
import WayToTeach from './components/WayToTeach'
import { differences, info } from './data'



const App = () => {

  const [content,setContent] = useState('Нажми на кнопку')


  const handleClick= (q)=>{
    return(
        setContent(q)
    )
}

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
        <Button onTouch={()=>handleClick('way')}>Подход</Button>
        <Button onTouch={()=>handleClick('easy')}>Доступность</Button>
        <Button onTouch={()=>handleClick('program')}>Концентрация</Button>
        </div>
        <p>{differences[content]}</p>
      </section>
    </main>
      
    </>
  )
}

export default App
 