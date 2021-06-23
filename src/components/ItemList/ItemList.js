import React from "react";
import Item from "../Item/Item";

export default function ItemList(data) {
  const ResultData = data.resultado;
  console.log(ResultData);

  return (
    <div>
      {ResultData.map((el) => {
        <Item name={el.name}></Item>;
      })}
    </div>
  );
}
