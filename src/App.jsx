import NavBar from './components/controls/NavBar'
import ItemListContainer from './components/item/ItemListContainer'
import { BrowserRouter } from 'react-router-dom'


const App = () => 
    <BrowserRouter>
        <NavBar/>
        <ItemListContainer />
        <div style={{display:'none'}}>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </BrowserRouter>
export default App