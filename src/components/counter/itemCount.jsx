import { BsPlusLg} from "react-icons/bs";
import { BsDash} from "react-icons/bs";
import React, {useContext} from 'react'
import './counter.css'
import { CountContext } from "../../context/countContext";
import { DataContext } from "../../context/cartContext";

const ItemCount = ({art}) =>{
    
    
    const{contador, setContador} = useContext(CountContext)
    const {cartInfo, setCart} = useContext (DataContext)

    const product = cartInfo.find(((cuadro)=>cuadro.id===art.id))
    const stock=art.stock;
    

    console.log(product);
    console.log(stock)
    

    const addQ = () =>{
        setContador(contador + 1);
        if(contador>0){
            const btn = document.getElementById("less")
            btn.classList.remove("hide")
        }
        let aux = (contador + 1)

        if(aux === stock){
            const btnA = document.getElementById("more")
            btnA.classList.add("hide")

        }
    }

    const quitQ = () =>{
        setContador (contador - 1);
        if(contador==2){
            const btn = document.getElementById("less")
            btn.classList.add("hide")
        }
        let aux = (contador - 1)

        if(aux < stock){
            const btnA = document.getElementById("more")
            btnA.classList.remove("hide")

        }
        
    }

    return(
        <>
        <div className="cardOptions">
            <p>Seleccione la cantidad</p>
            <div className="card__options__container">
                <button className="btn hide" id="less" onClick={quitQ}><BsDash /></button>
                <p>{contador}</p>
                <button onClick={addQ} id="more" ><BsPlusLg /></button>            
            </div>
        </div>
        
        </>
    )
}
export default ItemCount;