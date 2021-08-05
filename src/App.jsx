import NavBar from './components/controls/NavBar'
import ItemListContainer from './components/item/ItemListContainer'
import { BrowserRouter } from 'react-router-dom'
import ItemDetailContainer from './components/itemDetails/ItemDetailContainer'

const App = () => 
    <BrowserRouter>
        <NavBar/>
        {/* <ItemListContainer /> */}
        <ItemDetailContainer id={1}/>
        <div style={{display:'none'}}>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </BrowserRouter>
export default App