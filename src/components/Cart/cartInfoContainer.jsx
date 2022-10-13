import { useContext } from "react"
import { json } from "react-router-dom"
import { CartDataProvider, DataContext } from "../../context/cartContext"
import CartInfo from "../Cart View/CartInfo"


const CartInfoContainer = () =>{

    const {cartInfo} = useContext (DataContext)

    return(
        <section className="cart">
            <div className="cart__container">
                <CartInfo cartInfo={cartInfo}/>
            </div>
        </section>
    )
}
export default CartInfoContainer;