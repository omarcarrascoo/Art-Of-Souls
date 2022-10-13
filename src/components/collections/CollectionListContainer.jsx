import { useEffect, useState } from "react";
import paintingsColl from "../../data/paintings";
import { ColectionList } from "./ColectionList";
import { useParams } from "react-router-dom";
import { colectionFetch } from "../../utils/customFetch";



const ColectionContainer = ()=>{
    const [artCollection, setArtCollection] = useState([]);
    const {idColecion} = useParams();
    useEffect(() => {
        colectionFetch(paintingsColl, 1200, parseInt(idColecion) ).then((res) =>setArtCollection(res))
    },[])
    return(
       <ColectionList paintings={artCollection}/>
    )
}
export default ColectionContainer;