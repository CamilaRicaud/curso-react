import {Card, CardBody, Stack, Divider, CardFooter, ButtonGroup} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import '../estilos.css'

const Item = ({producto}) => {
    return (
    <>
        <Card >
            <CardBody className='card'>
                    <img className='imagen' src={producto.img} />
                    <Stack mt='6' spacing='3'>
                        <h1 className='tituloCard'>{producto.nombre}</h1>
                        <p className='precio' color='black'>
                            ${producto.precio}
                        </p>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter className='cardFooter'>
                    <ButtonGroup spacing='2'>
                        <Link to={`/item/${producto.id}`}>
                            <button>Ver detalle</button>
                        </Link>
                    </ButtonGroup>
                </CardFooter>
        </Card>
    </>
                

    )
}

export default Item