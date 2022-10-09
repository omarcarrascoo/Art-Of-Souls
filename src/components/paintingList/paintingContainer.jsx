import { useEffect, useState } from "react";
import paintingsColl from "../../data/paintings";
import PaintingList from "./paintingList";
import customFetch from "../../utils/customFetch"


const PaintingContainer = ()=>{
    const [artCollection, setArtCollection] = useState([]);
    useEffect(() => {
        customFetch(paintingsColl, 1200).then((res) =>setArtCollection(res))
    },[])
    return(
       <PaintingList paintings={artCollection}/>
    )
}
export default PaintingContainer;