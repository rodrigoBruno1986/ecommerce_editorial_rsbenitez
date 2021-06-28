import React from "react";
import "./Fecha.css";

export default function fecha() {
  const myDate = new Date();
  const fecha = myDate.getFullYear();

  return (
    <div>
      <p className="horaActual">{fecha}</p>
    </div>
  );
}
