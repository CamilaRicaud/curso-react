import {Card,CardBody, Stack, Divider, CardFooter, ButtonGroup} from '@chakra-ui/react'
import ItemCount from '../ItemCount'

const detail = ({item}) => {
    return (
        <div>
            <Card>
                <CardBody className='card'>
                    <img
                        src={item.img}
                    />
                    <Stack mt='6' spacing='3'>
                        <h1 className='tituloCard'>{item.nombre}</h1>
                        <p className='textoCard'>
                            {item.descripcion}
                        </p>
                        <p className='precio' color='black'>
                            ${item.precio}
                        </p>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter className='cardFooter'>
                    <ButtonGroup spacing='2'>
                        <ItemCount/>
                    </ButtonGroup>
                </CardFooter>
                </Card>
        </div>
    )
}

export default detail