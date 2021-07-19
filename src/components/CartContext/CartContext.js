import React, { useContext } from "react";
import { context } from "../contex/contex";
import "./CardContext.css";
export default function CartContext() {
  const { cart, setCart, clear, removeItem } = useContext(context);
  return (
    <div className="content-context">
      {cart.map((el) => {
        return (
          <div className="productItem">
            <p>{el.item.name}</p>
            <button onClick={() => removeItem(el.item.id)}> eliminar </button>
          </div>
        );
      })}
      <button onClick={clear}> eliminar todo </button>
    </div>
  );
}
