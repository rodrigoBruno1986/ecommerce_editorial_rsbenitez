import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./ItemDetail.css";
import ItemCounts from "../ItemCounts/ItemCounts";
import { Card } from "antd";
import { Button } from "antd";

const { Meta } = Card;

export default function ItemDetail(props) {
  const [quantityToAdd, setquantityToAdd] = useState(0);

  return (
    <div className="CardItem">
      <Card hoverable style={{ width: 240 }} cover={<img src={props.src} />}>
        <Meta title={props.name} />
        <p>{props.genero}</p>
        <p> precio ${props.precio}</p>
        <div>
          <ItemCounts stock={5} initial={1} onAdd={setquantityToAdd} />
        </div>

        {quantityToAdd ? (
          <Button>Termina tu compra</Button>
        ) : (
          console.log("no muestra  el boton")
        )}
      </Card>
    </div>
  );
}
