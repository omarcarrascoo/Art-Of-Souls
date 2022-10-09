import ItemCount from "../counter/itemCount"
import './painting.css'

const Painting = () =>{
    return(
        <section className="painting">
            <div className="painting__container">
                <div className="painting__img">
                    <img src="" alt="Cuadro de arte" />
                </div>
                <div className="painting__info">
                    <div className="painting__text">
                        <h1>Nombre del Cuadro</h1>
                        <p>Nombre del artista</p>
                        <p className="date">
                            1975
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