import { Route, Routes } from "react-router-dom"
import ItemListContainer from "../components/categorias/itemListcontainer";
import { SliderContainer } from '../components/Slider/SliderContainer';
import Painting from '../components/painting/paintig'
import PaintingContainer from "../components/paintingList/paintingContainer";
const Rutas = () =>{
    return(
        <Routes>
            <Route path="/" element={<SliderContainer/>}/>
            <Route path="/colecciones" element={<ItemListContainer/>}/>
            <Route path="/cuadro" element={<Painting/>} />
            <Route path="/cuadros" element={<PaintingContainer/>} />
        </Routes>
    )
}
export default Rutas