import React from "react";
import "./ItemListContainer.css";

class ItemListContainer extends React.Component {
  render() {
    return (
      <div className="Item-style">
        <h1>
          {this.props.title} a {this.props.name}
        </h1>
        ;
      </div>
    );
  }
}

export default ItemListContainer;
