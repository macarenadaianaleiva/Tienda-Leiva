import React from 'react'
import {Item} from './Item'
export const ItemList = ({listaProductos}) => {
  return (
    <div className='card'>
        {
            listaProductos.map((producto)=> <Item key={producto.id} producto={producto} /> )
        }
    </div>
  )
}
