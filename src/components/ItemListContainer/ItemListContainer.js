import React from "react";
import "./ItemListContainer.css";
import ItemCounts from "../ItemCounts/ItemCounts";

class ItemListContainer extends React.Component {
  render() {
    return (
      <div className="Item-style">
        <h1>
          {this.props.title} a {this.props.name}
        </h1>
        <ItemCounts
          stock={5}
          initial={1}
          onAdd={(count) => console.log("agregado " + count)}
        />
      </div>
    );
  }
}

export default ItemListContainer;
