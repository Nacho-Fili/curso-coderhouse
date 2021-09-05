import React, {createContext, useReducer, useCallback} from "react";

const CartContext = createContext({});

export function CartContextProvider({children}) {
  const stockExceeded = (oldQuantity, newQuantity, stock) => {
    return oldQuantity + newQuantity > stock;
  };

  const reducer = useCallback((state, action) => {
    switch (action.type) {
      case "add": {
        const {id} = action.item;
        let item = state.items[id];

        let quantityToAdd;
        let priceToAdd;

        if (item) {
          if (stockExceeded(item.quantity, action.item.quantity, item.stock)) {
            quantityToAdd = item.stock - item.quantity;
            item.quantity = item.stock;
            priceToAdd = quantityToAdd * item.price;
          } else {
            item.quantity = item.quantity + action.item.quantity;
            quantityToAdd = action.item.quantity;
            priceToAdd = item.price * action.item.quantity;
          }
        } else {
          item = action.item;
          quantityToAdd = item.quantity;
          priceToAdd = item.quantity * item.price;
        }

        return {
          items: {
            ...state.items,
            [id]: item,
          },
          quantity: state.quantity + quantityToAdd,
          price: state.price + priceToAdd,
        };
      }

      case "delete": {
        const item = state.items[action.id];

        if (!item) return state;

        const finalPrice = state.price - item.price * item.quantity;
        const finalQuantity = state.quantity - item.quantity;
        delete state.items[item.id];

        return {items: {...state.items}, quantity: finalQuantity, price: finalPrice};
      }

      case "clear":
        return {items: {}, quantity: 0, price: 0};

      default:
        throw new Error();
    }
  }, []);
  const [cart, dispatch] = useReducer(reducer, {items: {}, quantity: 0, price: 0});

  const addItem = (item, quantity) => {
    dispatch({type: "add", item: {...item, quantity}});
  };

  const removeItem = (id) => dispatch({type: "delete", id});

  const clear = () => dispatch({type: "clear"});

  return (
    <CartContext.Provider
      value={{
        items: Object.values(cart.items),
        finalPrice: cart.price,
        finalQuantity: cart.quantity,
        addItem,
        removeItem,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
