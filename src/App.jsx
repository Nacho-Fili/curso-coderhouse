import {useEffect, useState} from "react";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/item/ItemListContainer";
import ItemDetailsContainer from "./components/itemDetails/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {CartContextProvider} from "./context/CartContext";
import {UserContextProvider} from "./context/UserContext";
import {SearchContextProvider} from "./context/SearchContext";
import LoginForm from "./components/user/LoginForm";
import SignupForm from "./components/user/SignupForm";
import Profile from "./components/user/Profile";
import Checkout from "./components/checkout/Checkout";
import itemsService from "./services/itemsService";
import SearchService from "./services/searchService";
import "./App.scss";

const App = () => {
  const [searchService, setSearchService] = useState(null);

  useEffect(() => {
    itemsService.fetchAll().then((items) => setSearchService(SearchService.getInstance(items)));
  }, []);

  return (
    <BrowserRouter>
      <CartContextProvider>
        <UserContextProvider>
          <SearchContextProvider>
            <NavBar searchService={searchService} />
            <div className="main">
              <Switch>
                <Route path="/" component={ItemListContainer} exact />
                <Route path="/search/:query" component={ItemListContainer} exact />
                <Route path="/category/:id" component={ItemListContainer} exact />
                <Route path="/item/:id" component={ItemDetailsContainer} exact />
                <Route path="/cart" component={Cart} exact />
                <Route path="/login" component={LoginForm} exact />
                <Route path="/login/:from" component={LoginForm} exact />
                <Route path="/signup" component={SignupForm} exact />
                <Route path="/profile" component={Profile} exact />
                <Route path="/checkout" component={Checkout} exact />
              </Switch>
            </div>
          </SearchContextProvider>
        </UserContextProvider>
      </CartContextProvider>
      <div style={{display: "none"}}>
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </BrowserRouter>
  );
};

export default App;
