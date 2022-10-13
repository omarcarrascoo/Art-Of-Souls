import { BsPlusLg} from "react-icons/bs";
import { BsDash} from "react-icons/bs";
import React, {useContext, useState} from 'react'
import './counter.css'
import { SetCartBtn } from "../Cart/setCart";
import { CountContext } from "../../context/countContext";

const ItemCount = ({art}) =>{
    const stock=art.stock;

    const{contador, setContador} = useContext(CountContext)

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
        
        </>
    )
}
export default ItemCount;