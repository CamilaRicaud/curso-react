import Item from "./Item"
import '../estilos.css'


const ItemList = ({productos}) => {
    
    return (
        <div className="contenedorPrincipal">
            {
                productos.map((producto)=>{
                    return(
                            <Item
                                producto={producto}
                                key={producto.id}
                            />
                        
                    )
                })
            }
        </div>
    )
}

export default ItemList