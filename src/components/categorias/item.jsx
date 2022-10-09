
import { Link } from "react-router-dom"
export const Item = ({col}) =>{
    const bgItem ={
        backgroundImage:
        `url(${col.cover})`,

    }
    return(
        <div style={bgItem} className="item">
            <div className="item__text">
                <h3>{col.name}</h3>
                <p>{col.artist}</p>
                <button><Link to='/collection'>Ver Coleccion</Link></button>
            </div>
        </div>
    )
}