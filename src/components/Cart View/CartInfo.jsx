
import { CartItem } from "./cartItem"
const CartInfo = ({cartInfo})=>{
    const color = {
        color:"#f2f2f2"
    }
    
    return(

        <div style={color} className="cart__container">
            {cartInfo.map((cartInfo, i ) => <CartItem key={cartInfo.id} cartInfo={cartInfo}  />)}
        </div>
    )
}
export default CartInfo;