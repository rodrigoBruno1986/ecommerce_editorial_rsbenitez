import React from "react";
import "./CardWidget.css";

class CardWidget extends React.Component {
  render() {
    return (
      <div>
        <img className="image-navbar" src={this.props.src} />
      </div>
    );
  }
}

export default CardWidget;
