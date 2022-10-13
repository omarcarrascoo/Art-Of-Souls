import {Colection} from './collection'

export const ColectionList =({paintings})=>{
    return(
        <section className="ItemList">
        <div className="ItemList__container">
            {paintings.map((art, i ) => <Colection key={art.id} art={art}  />)}
        </div>
        </section>
    )
}