
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart'



const App = () => {

  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route exact path='/' element={<ItemListContainer />}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
        <Route exact path='/productos/:categoria' element={<ItemListContainer/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App