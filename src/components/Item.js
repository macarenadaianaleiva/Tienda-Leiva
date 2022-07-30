import React from 'react'
 
export const Item = ({producto}) => {
  return (
    <div className='cardItem' >
        <img className='imgCard' src={producto.img} alt={producto.name} />
        <h2>{producto.name}</h2>
        <p>${producto.precio}</p>
        <p>Stock:{producto.stock}</p>
        <p className ='cardDescripcion'>{producto.description}</p>
    </div>
  )
}
