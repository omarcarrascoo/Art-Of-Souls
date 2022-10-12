import { useContext } from "react"
import { json } from "react-router-dom"
import { CartDataProvider, DataContext } from "../../context/cartContext"


const CartInfoContainer = () =>{

    const {cartInfo} = useContext (DataContext)

    return(
        <section className="cart">
            <div className="cart__container">
                
            </div>
        </section>
    )
}
export default CartInfoContainer;