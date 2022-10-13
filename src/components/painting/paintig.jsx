import { SetCartBtn } from "../Cart/setCart"
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
                        <p>Precio: ${paint.price}</p>
                        <p className="date">
                           Año de creación: {
                                paint.year
                            }
                        </p>
                    </div>
                    <ItemCount art={paint}/>
                    <SetCartBtn precio={paint.price} nombre= {paint.title} id={paint.id} img={paint.img} />
                </div>
            </div>
        </section>
    )
}
export default Painting