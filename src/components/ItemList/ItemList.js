import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

export default function ItemList(props) {
  const ResultData = props.resultado;

  return (
    <div className="contentItemList">
      {ResultData.map((el) => (
        <Item
          description={el.description}
          src={el.image}
          name={el.name}
          precio={el.precio}
          id={el.id}
          genero={el.genero}
        />
      ))}
    </div>
  );
}
