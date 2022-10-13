
import { useEffect, useState } from "react"
import { Slider } from "./Slider"
import './slider.css'
import customFetch from "../../utils/customFetch"
import paintingsColl from "../../data/paintings"


export const SliderContainer = () =>{
    const [products, setProducts] = useState([])

    useEffect(() => {
        customFetch(paintingsColl, 1200, 101).then((res) =>setProducts(res))
    },[])
    return(
        <Slider cover={products} />
    )
}