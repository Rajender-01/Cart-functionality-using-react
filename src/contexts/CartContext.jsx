import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, id) => {
    const newItems = { ...product, amount: 1 };
    // Check if the item is already in this cart
    const cartItem = cart.find((item) => { return item.id === id });

    // if cart item is already present in this cart
    if (cartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 }
        } else {
          return item;
        }
      })
      setCart(newCart);
    } else {
      setCart([...cart, newItems]);
    }
  };
  console.log(cart);

  return (
    <CartContext.Provider value={{cart, addToCart} }>
    {children}
  </CartContext.Provider>
  )
}

