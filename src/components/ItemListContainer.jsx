
import { Center } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
  return (
    <>
      <Center h='300px' color='black' fontSize='80px'>
        <h1>{greeting}</h1>
      </Center>
    </>
  )
}

export default ItemListContainer