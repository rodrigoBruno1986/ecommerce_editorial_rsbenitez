import { createContext, useState } from "react";

export const context = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      alert("el prodructo esta en el carrito");
    } else {
      const newElement = { item, quantity };
      setCart([...cart, newElement]);
    }
  };
  console.log(cart);

  const clear = () => {
    setCart([]);
  };
  const removeItem = (itemId) => {
    const itemDelete = cart.filter((el) => el.item.id !== itemId);
    setCart(itemDelete);
  };

  const isInCart = (id) => {
    return cart.find((el) => el.item.id === id);
  };

  return (
    <context.Provider value={{ addToCart, cart, setCart, clear, removeItem }}>
      {children}
    </context.Provider>
  );
};
