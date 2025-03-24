import { useState } from 'react'
import logo from '/уник.png'

const AppHeader = () => {


    const [now,setNow] = useState(new Date())
   
    setInterval(()=>setNow(new Date()),1000)
    

    return (
        <div className="header">
            <div className='headerDiv'>
            <img style={{width:66,height:66}} src={logo} alt="" />
            <h3>Мой Университет</h3>
            </div>
            <span>Время сейчас:{now.toLocaleTimeString()}</span>
        </div>
    )
}

export default AppHeader