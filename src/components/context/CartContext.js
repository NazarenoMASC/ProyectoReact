import { createContext, useState } from "react";
export const CartContext = createContext({});

const { Provider } = CartContext;

export const CartProvider = ({ defaultvalue = [], children }) => {
  const [cart, setCart] = useState(defaultvalue);
  const addToCart = (item, quantity) => {
    console.log(item);
    if (isInCart(item.id)) {
      const newCart = [...cart];
      for (const element of newCart) {
        if (element.item.id === item.id) {
          element.quantity = element.quantity + quantity;
        }
      }
      setCart(newCart);
    } else {
      setCart([
        ...cart,
        {
          item: item,
          quantity: quantity,
        },
      ]);
    }
  };
  const isInCart = (id) => {
    return cart.find((element) => element.item.id === id);
  };
  const clearCart = () => {
    setCart([]);
  };
  const context = {
    cart,
    clearCart,
    addToCart,
  };
  return (
    <>
      <Provider value={context}>{children}</Provider>
    </>
  );
};
