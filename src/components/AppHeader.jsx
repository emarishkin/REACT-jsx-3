import logo from '/уник.png'

const AppHeader = () => {

    const now= new Date()


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