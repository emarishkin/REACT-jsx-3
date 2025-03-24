import { info } from "../data"


const WayToTeach = ({info}) =>{
    return (
        <div>
        
          {info.map(inf=>(
            <div key={inf.title}>
               <li style={{border: '1px solid black', borderRadius:'10px',listStyle:'none',padding:10,margin:'0 50px'}}>
            <p>
              <strong>{inf.title}</strong>{inf.descriptions}
             
            </p>
          </li>
            </div>
          ))}
        </div>
    )
}

export default WayToTeach