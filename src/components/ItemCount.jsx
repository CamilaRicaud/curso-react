import { useState } from 'react'
import '../estilos.css'

const ItemCount = () => {

  const [contador, setContador]= useState(0);
  const sumar = ()=>{
    if (contador < 10){
      setContador(contador + 1)
    }
    
  }
  const restar = ()=>{
    if (contador > 0) {
      setContador(contador - 1)
    }
  }

  const mostrarMensaje = () =>{
    if(contador>0){
      alert(`Agregaste al carrito ${contador} unidades`)
    }else(
      alert('No se agregaron productos al carrito')
    )
    
  }

  return (
    <>
      <button className='botonsumar' onClick={sumar}>
        +
      </button>
      <button className='botonagregar' onClick={mostrarMensaje}>
        Agregar {contador}
      </button>
      <button className='botonsumar' onClick={restar}>
        -
      </button>
    </>
  )
}

export default ItemCount