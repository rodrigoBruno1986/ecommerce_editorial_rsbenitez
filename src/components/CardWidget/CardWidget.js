import React, { useContext } from "react";
import "./CardWidget.css";
import "antd/dist/antd.css";
import { Badge } from "antd";
import carrito from "../../images/shopping-cart.png";
import { Link } from "react-router-dom";

import { context } from "../contex/contex";

export default function CardWidget() {
  const { sumarItemCarrito } = useContext(context);
  return (
    <Link to="/cart">
      <Badge count={sumarItemCarrito()}>
        <img className="carrito" src={carrito} />
      </Badge>
    </Link>
  );
}
