
import { Paint } from "./Paint";

const PaintingList = ({paintings})=>{
    
    return(
        <section className="ItemList">
            <div className="ItemList__container">
                {paintings.map((art, i ) => <Paint key={art.id} art={art}  />)}
            </div>
        </section>
    )
}
export default PaintingList;