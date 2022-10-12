import { BsPlusLg} from "react-icons/bs";
import { BsDash} from "react-icons/bs";
import React, {useState} from 'react'
import './counter.css'
import { SetCartBtn } from "../Cart/setCart";

const ItemCount = ({art}) =>{
    const stock=art.stock;

    const [contador, setContador] = useState(1)
    

    const addQ = () =>{
        setContador(contador + 1);
        if(contador>0){
            const btn = document.getElementById("less")
            btn.classList.remove("hide")
        }
        let aux = (contador + 1)

        if(aux == stock){
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
        <SetCartBtn cantidad={contador} precio={art.price} nombre= {art.title} id={art.id} />
        </>
    )
}
export default ItemCount;