import React from "react";

export default function Item(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.status}</p>
      <span>{props.precio}</span>
    </div>
  );
}
