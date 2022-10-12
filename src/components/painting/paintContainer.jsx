import { useState, useEffect } from "react"
import paintingsColl from "../../data/paintings"
import Painting from "./paintig"
import customFetch from "../../utils/customFetch"
import { useParams } from "react-router-dom"

const PaintContainer=() =>{
    const [cuadro, setCuadro] = useState({});
    const {id} = useParams();
    useEffect(() => {
        customFetch(paintingsColl, 1200, parseInt(id)).then((res) =>setCuadro(res))
    },[id])
    return(
       <Painting paint={cuadro}/> 
    )
}
export default PaintContainer;