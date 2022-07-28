import {useState} from 'react'

export const ItemCount = ({onAdd,initial,stock}) =>{
    const [contador,setContador] = useState(initial);
  
        const sumar = () =>{
        if(contador < stock){
          setContador(contador+1)
        }
        
    }

    const restar = () =>{
        if(contador > 0){
          setContador(contador-1) 
        }
    }

  

    return(

        <div>
            <h2>{contador}</h2>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <button onClick={()=>onAdd(contador)}>Comprar</button>
        </div>
        
    )
    }