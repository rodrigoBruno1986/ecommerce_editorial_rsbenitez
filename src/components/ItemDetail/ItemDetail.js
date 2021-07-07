import React from "react";
import "antd/dist/antd.css";
import "./ItemDetail.css";
import { Card } from "antd";
// import ItemcCount from "../ItemCounts/ItemCounts";

const { Meta } = Card;

export default function Item(props) {
  return props ? (
    <div className="CardItem">
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img src={props.item.image} />}
      >
        <Meta title={props.item.name} />
        <p>{props.item.precio}</p>
        {/* <ItemcCount
          stock={5}
          initial={1}
          onAdd={(count) => console.log("agregado " + count)}
        /> */}
      </Card>
    </div>
  ) : (
    <p>No se pudo cargar el producto</p>
  );
}
