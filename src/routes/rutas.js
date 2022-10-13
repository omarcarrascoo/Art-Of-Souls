import { Route, Routes } from "react-router-dom"
import ItemListContainer from "../components/categorias/itemListcontainer";
import { SliderContainer } from '../components/Slider/SliderContainer';
import Painting from '../components/painting/paintig'
import PaintingContainer from "../components/paintingList/paintingContainer";
import PaintContainer from "../components/painting/paintContainer";
import CartInfoContainer from "../components/Cart/cartInfoContainer";
import ColectionContainer from "../components/collections/CollectionListContainer";



const Rutas = () =>{
    return(
        <Routes>
            <Route path="/" element={<SliderContainer/>}/>
            <Route path="/colecciones" element={<ItemListContainer/>}/>
            <Route path="/cuadros" element={<PaintingContainer/>} />
            <Route path="/cuadros/:id" element={<PaintContainer/>} />
            <Route path="/carrito" element={<CartInfoContainer/>}/>
            <Route path="/colecciones/:idColecion" element={<ColectionContainer/>}/>
            
        </Routes>
    )
}
export default Rutas