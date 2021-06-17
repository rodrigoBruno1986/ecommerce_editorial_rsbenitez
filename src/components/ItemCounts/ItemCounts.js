import React, { useState } from "react";

function ItemCounts({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const addCont = (e) => {
    if (stock > 1 && count < stock) {
      setCount(count + 1);
    } else {
      e.preventDefault();
    }
  };

  const restCont = (e) => {
    if (stock > 1 && count > 0) {
      setCount(count - 1);
    } else {
      e.preventDefault();
    }
  };



  return (
    <div>
      <p>{count}</p>

      <button onClick={addCont}>+</button>
      <button onClick={restCont}>-</button>
      <button onClick={()=>onAdd(count)}> Agregar</button>
    </div>
  );
}

export default ItemCounts;
