import ItemCount from "../counter/itemCount"
import './painting.css'

const Painting = ({paint}) =>{
    
    return(
        <section className="painting">
            <div className="painting__container">
                <div className="painting__img">
                    <img src={paint.img} alt="Cuadro de arte" />
                </div>
                <div className="painting__info">
                    <div className="painting__text">
                        <h1>{paint.title}</h1>
                        <p>{paint.artist}</p>
                        <p className="date">
                            {
                                paint.year
                            }
                        </p>
                    </div>
                    <ItemCount/>
                    <div className="cartBtn">
                        <button><a href="#">Añadir al carrito</a></button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Painting