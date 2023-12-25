import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { ItemPorId } from  '../../pedirdata/pedirdatos'

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        ItemPorId((id))
        .then((res) => {
            setItem(res);
        })
    }, [id])


    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer