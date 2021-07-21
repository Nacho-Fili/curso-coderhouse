const MenuOption = ({ children }) => 
    <p onClick={ () => console.log(`Has hecho click en ${children}`) } >
        { children }
    </p>

export default MenuOption