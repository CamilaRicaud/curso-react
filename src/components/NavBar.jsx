
import {
  Flex,
  Spacer,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuGroup,
} from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import '../estilos.css'

const NavBar = () => {
  return (
    <div className='Navbar'>
      <Flex>
        <Link to={"/"}>
          <Box p='4'>
          <p className='brand'>ARCANA</p>
          </Box>
        </Link>
        <Spacer />
        <Menu>
          <MenuButton as={Button} colorScheme='black' color='black'>
            <p className='menu'>Menu</p>
          </MenuButton>
          <MenuList>
            <MenuGroup title='Categorías'>
              <Link to={"/productos/facial"}>
                <MenuItem>Cuidado Facial</MenuItem>
              </Link>
              <Link to={"/productos/corporal"}>
                <MenuItem>Cuidado Corporal</MenuItem>
              </Link>
              <Link to={"/productos/capilar"}>
                <MenuItem>Cuidado Capilar</MenuItem>
              </Link>
            </MenuGroup>
          </MenuList>
        </Menu>
        <Spacer/>
        <Link to={"/cart"}>
          <Box p='4'>
            <CartWidget/>
          </Box>
        </Link>
      </Flex>
    </div>
  )
}

export default NavBar