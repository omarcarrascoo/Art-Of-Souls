
import { useEffect, useState } from "react"
import { Slider } from "./Slider"
import './slider.css'



export const SliderContainer = () =>{
    const [products, setProducts] = useState([])
    const[loading, setLoading] = useState(true)

    
   console.log(products);
    return(
        <Slider />
    )
}