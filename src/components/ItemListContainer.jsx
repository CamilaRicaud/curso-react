import { Center } from '@chakra-ui/react'

const ItemListContainer = ({saludo}) => {
  return (
    
    <>
      <Center h='300px' color='black' fontSize='60px'>
        <h1>{saludo}</h1>
      </Center>
    </>
  )
}

export default ItemListContainer