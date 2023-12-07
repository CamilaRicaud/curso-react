
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Spacer,
  Box,
} from '@chakra-ui/react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div>
      <Flex>
        <Box p='4'>
        VENUS Estetica
        </Box>
        <Spacer />
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
        <Box p='4'>
          <CartWidget/>
        </Box>
      </Flex>
    </div>
  )
}

export default NavBar