
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import pedirDatos from '../pedirdata/pedirdatos'
import '../estilos.css'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;

    useEffect(() => {
      pedirDatos()
      .then((res) => {
        if (categoria) {
          setProductos(res.filter((prod) => prod.categoria === categoria));
        } else {
          setProductos(res);
        }
        
      })
  }, [categoria])
  return (
    <>
      <h1 className='tituloPrincipal'>ARCANA</h1>
      <h2 className='tituloSecundario'>Cosmética Natural</h2>
      <ItemList
        //PROPS
        productos = {productos}
      />
    </>
  )
}

export default ItemListContainer