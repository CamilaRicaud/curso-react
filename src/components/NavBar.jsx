
import { Flex, Spacer } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div>
      <Flex bg='grey' w='100%' p={4}>
        <Menu>
          <MenuButton as={Button} >
          Menu
          </MenuButton>
        <MenuList>
          <MenuItem as='a' href='#' color='black'>Home</MenuItem>
          <MenuItem as='a' href='#' color='black'>Servicios</MenuItem>
          <MenuItem as='a' href='#' color='black'>Nosotros</MenuItem>
        </MenuList>
      </Menu>
      <Spacer/>
      <CartWidget/>
      </Flex>
      
    </div>
  )
}

export default NavBar