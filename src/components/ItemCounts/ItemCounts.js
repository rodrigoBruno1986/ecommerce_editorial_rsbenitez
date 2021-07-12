import React, { useState } from "react";

import "antd/dist/antd.css";
import { Button } from "antd";

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

      <Button onClick={addCont}>+</Button>
      <Button onClick={restCont}>-</Button>
      <Button onClick={() => onAdd(count)}> Agregar</Button>
    </div>
  );
}

export default ItemCounts;
