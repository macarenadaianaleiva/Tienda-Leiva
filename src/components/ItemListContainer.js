import { useState, useEffect } from "react"
/* import { ItemCount } from "./ItemCount" */
import { ItemList } from "./ItemList"
import {data} from '../Mock/fakeApi'
 
 
export const ItemListContainer = ( {greeting} ) =>{
 
    const [mensaje, setMensaje]=useState(false)
    const[loading, setLoading]=useState(true)
    const [listaProductos, setListaProductos]=useState([])
 
   /*  const onAdd = (cantidad) =>{
     setMensaje(`Agregaste ${cantidad} productos al carrito`)
    } */
 
    useEffect(()=>{
        data
        .then((res)=>setListaProductos(res))
        .catch(()=>setMensaje('Hubo un error intente mas tarde'))
        .finally(()=>setLoading(false))
    },[]) //para que se monte una vez
 
    return(
        <main>
   
        <div className="padre">
        <h1>Hola {greeting}</h1>
       
        {/* <ItemCount stock={5} initial={0} onAdd={onAdd} /> */}
 
        {mensaje&&<h2>{mensaje}</h2>}
        {loading ? <p>Cargando...</p> : <ItemList listaProductos={listaProductos} />}
 
        </div>
        </main>
    )
}
