import { Route, Routes } from "react-router-dom"
import ItemListContainer from "../components/categorias/itemListcontainer";
import { SliderContainer } from '../components/Slider/SliderContainer';
import Painting from '../components/painting/paintig'
const Rutas = () =>{
    return(
        <Routes>
            <Route path="/" element={<SliderContainer/>}/>
            <Route path="/colecciones" element={<ItemListContainer/>}/>
            <Route path="/cuadro" element={<Painting/>} />
        </Routes>
    )
}
export default Rutas