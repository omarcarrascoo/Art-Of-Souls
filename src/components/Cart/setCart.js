import { useContext } from "react"
import { DataContext } from "../../context/cartContext"
import { CountContext } from "../../context/countContext"


export const SetCartBtn = ({cantidad, precio, nombre, id, img}) =>{
    const {cartInfo, setCart} = useContext (DataContext)
    const{contador, setContador} = useContext(CountContext)
    
    const addCart =() => setCart([...cartInfo,{cantidad:cantidad, img:img, precio:precio, nombre:nombre, id: id}])
    const addCarts =(id)=>{
        
        const product = cartInfo.find(((cuadro)=>cuadro.id===id))
        const data = cartInfo;

        if(product){
           setContador(product.cantidad)
        }else{
            setCart([...cartInfo,{cantidad:contador, img:img, precio:precio, nombre:nombre, id: id}])
            console.log(cartInfo)
            setContador(1)
        }
    }
    console.log(cartInfo)
    
    return(
        // <div className="cartBtn">
        //     <button onClick={() => setCart([...cartInfo,{cantidad:cantidad, img:img, precio:precio, nombre:nombre, id: id}])}>Añadir al carrito</button>
        // </div>
        <div className="cartBtn">
            <button onClick={()=>{
                addCarts(id)
            }}>Añadir al carrito</button>
        </div>
    )
}