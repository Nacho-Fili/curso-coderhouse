import Header from './components/Header'
import NavBar from './components/NavBar'
import MenuOption from './components/MenuOption.jsx'
import H1 from './components/H1'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer'


const App = () => 
    <Header>
        <H1> TryH4rd </H1>
        <NavBar>
            <MenuOption> Inicio </MenuOption>
            <MenuOption> Productos </MenuOption>
            <MenuOption> Mi Cuenta </MenuOption>
            <CartWidget/>
        </NavBar>
        <ItemListContainer greeting='Pronto lanzaremos el producto!'/>
    </Header>

export default App