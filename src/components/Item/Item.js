import React from "react";
import "antd/dist/antd.css";
import "./Item.css";
import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

export default function Item(props) {
  console.log("item" + props.id);
  return (
    <div className="CardItems">
      <Link to={`/itemDetail/${props.id}`}>
        <Card hoverable style={{ width: 240 }} cover={<img src={props.src} />}>
          <Meta title={props.name} />
          <p> precio ${props.precio}</p>
        </Card>
      </Link>
    </div>
  );
}
