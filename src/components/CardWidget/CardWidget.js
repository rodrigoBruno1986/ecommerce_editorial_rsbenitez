import React from "react";
import "./CardWidget.css";
import "antd/dist/antd.css";
import { Badge } from "antd";
import carrito from "../../images/shopping-cart.png";
import { Link } from "react-router-dom";

class CardWidget extends React.Component {
  render() {
    return (
      <Link to="/cartTotal">
        <Badge count={1}>
          <img className="carrito" src={carrito} />
        </Badge>
      </Link>
    );
  }
}

export default CardWidget;
