
import '../Button/Button.css'

const Button = ({children,onTouch}) => {

    return (
         <button onClick={onTouch} className='button'>{children}</button>   
    )
}


export default Button