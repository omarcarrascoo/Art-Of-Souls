import { createContext, useContext } from "react"
import { DataContext } from "../../context/cartContext"


export const SetCartBtn = ({cantidad, precio, nombre, id}) =>{
    const {cartInfo, setCart} = useContext (DataContext)

    // const addCart =(cantidad, precio, nombre, id)=>{
    //     const total = precio * cantidad
    //     setCart({cantidad:cantidad, precio:precio, nombre:nombre, id: id, total})

    // }

    console.log(cartInfo)
    return(
        <div className="cartBtn">
            <button onClick={() => setCart([...cartInfo,{cantidad:cantidad, precio:precio, nombre:nombre, id: id}])}>Añadir al carrito</button>
        </div>
    )
}