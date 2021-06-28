import React from "react";
import "antd/dist/antd.css";
import "./Item.css";
import { Card } from "antd";

const { Meta } = Card;

export default function Item(props) {
  return (
    <div className="CardItems">
      <Card hoverable style={{ width: 240 }} cover={<img src={props.src} />}>
        <Meta title={props.name} />
        <p> precio ${props.precio}</p>
      </Card>
    </div>
  );
}
