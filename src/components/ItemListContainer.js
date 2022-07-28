import { ItemCount } from "./ItemCount"

export const ItemListContainer = ( {greeting} ) =>{
    return(
        <main>
        <div className="padre">
        <h1>Hola {greeting}</h1>
        <ItemCount stock={5} initial={0} />
        </div>
        </main>
    )
}