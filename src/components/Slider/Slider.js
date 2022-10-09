import { Link } from "react-router-dom"
import bg from '../../assets/imgs/bg.png'

export const Slider = () =>{
    const estilo ={
        backgroundImage:
        `url(${bg})`,

    }
    return(
        <>
        <section style={estilo} className="cover">
            <div className="cover__container">
                <div className="text">
                    <h1>Nombre de la expocisión</h1>
                    <p>Por: Nombre del Artista</p>
                   <button className="btn"><Link to='/colecciones'>Ver Coleccion</Link></button>
                </div>
            </div>
        </section>
        <section className="frase">
            <div className="container__frase">
                <p>“El objetivo del arte no es representar la apariencia externa de las cosas, sino su significado interior.”</p>
                <p className="red">-Aristoteles</p>
            </div>
        </section>
        </>
    )
    
}