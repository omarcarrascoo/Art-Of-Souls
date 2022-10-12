import { Link } from 'react-router-dom';
import './paint.css'

export const Paint = ({art}) =>{
    return(
        <Link to={`/cuadros/${art.id}`}>
        <div className="artCard">
            <div className="artCard__container">
               <div className="artCar__img">
                    <img src={art.img} alt="Imagen del cuadro" />
               </div>
               <div className="artCard__text">
                    <h3>{art.title}</h3>
                    <p>{art.artist}</p>
                    <button className="showMore">Ver mas</button>
               </div>
            </div>
        </div>
        </Link> 
    )
}