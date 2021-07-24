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

  const sumarPrecio = () => {
    return cart.reduce(
      (acc, element) => (acc += element.item.precio * element.quantity),
      0
    );
  };
  const sumarItemCarrito = () => {
    return cart.reduce((acc, element) => (acc += element.quantity), 0);
  };

  return (
    <context.Provider
      value={{
        addToCart,
        cart,
        setCart,
        clear,
        removeItem,
        sumarPrecio,
        sumarItemCarrito,
      }}
    >
      {children}
    </context.Provider>
  );
};
