import { useEffect, useState } from "react";
import customFetch from "../../utils/customFetch";
import { ItemList } from "./itemList"
import artColection from '../../data/colections'
import './item.css'

const ItemListContainer = () =>{
    const[collection, setCollection] = useState([]);
    useEffect(() =>{
        customFetch(artColection, 1200).then((res) =>setCollection(res))
    },[])
    return(
        <ItemList data={collection}/>
    )
}
export default ItemListContainer;