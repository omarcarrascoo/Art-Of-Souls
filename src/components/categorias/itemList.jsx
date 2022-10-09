import { Item } from "./item"


export const ItemList = ({data}) =>{
    
    return(
        <section className="ItemList">
            <div className="ItemList__container">
                {data.map((prod, i ) => <Item key={prod.id} col={prod}  />)}
            </div>
        </section>
    )
}