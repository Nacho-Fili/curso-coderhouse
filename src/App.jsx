import Header from './components/Header'
import NavBar from './components/controls/NavBar'
import MenuOption from './components/MenuOption.jsx'
import H1 from './components/H1'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/item/ItemListContainer'
import './App.css'
import colors from './colors'

const App = () => 
    <>
        <Header>
            <H1> TryH4rd </H1>
            <NavBar>
                <MenuOption> Inicio </MenuOption>
                <MenuOption> Productos </MenuOption>
                <MenuOption> Mi Cuenta </MenuOption>
                <CartWidget/>
            </NavBar>
        </Header>
        <div className='main' style={{backgroundColor: colors.background}}>
            <ItemListContainer />
        </div>
        <div style={{display:'none'}}>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </>
export default App