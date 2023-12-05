
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'



const App = () => {

  const saludo = 'Bienvenidos!'
  return (
    <>
      <NavBar/>
      <ItemListContainer
      saludo={saludo}
      />
    </>
  )
}

export default App