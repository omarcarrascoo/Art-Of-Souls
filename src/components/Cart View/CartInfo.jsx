import './cartView.css'
import { CartItem } from "./cartItem"
import { Link } from "react-router-dom"
const CartInfo = ({cartInfo})=>{
    const color = {
        color:"#f2f2f2"
    }
     
    if (cartInfo.length === 0) {
        return(
            <div className="noneCart">
                <h1>No hay productos agregados al carrito</h1>
                <button><Link to='/cuadros'>Ver Cuadros</Link></button>
            </div>
        )
    } else {
        return(

            <div className="cartView">
                <div style={color} className="cart__container">
                    {cartInfo.map((cartInfo, i ) => <CartItem key={cartInfo.id} cartInfo={cartInfo}  />)}
                </div>
                <div className="btn__cart">
                    <button>Comprar</button>
                </div>
            </div>
        )
    }
    
}
export default CartInfo;