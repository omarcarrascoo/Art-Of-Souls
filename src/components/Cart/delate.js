import { useContext } from "react"
import { Link } from "react-router-dom"
import { DataContext } from "../../context/cartContext"
import { CountContext } from "../../context/countContext"


export const DelateCartBtn = ({id}) =>{
    const {cartInfo, setCart} = useContext (DataContext)
    console.log({id})
    const delateProduct =(id)=>{
        
        const productIndex = cartInfo.findIndex(((cuadro)=>cuadro.id===id))
        const data = cartInfo;

        data.splice(productIndex, 1)
           setCart([...data])
    }
    console.log(cartInfo)
    
    return(
        // <div className="cartBtn">
        //     <button onClick={() => setCart([...cartInfo,{cantidad:cantidad, img:img, precio:precio, nombre:nombre, id: id}])}>Añadir al carrito</button>
        // </div>
        <div className="cartBtn">
            <button onClick={()=>{
                delateProduct(id)
            }}>Eliminar</button>
        </div>
    )
}