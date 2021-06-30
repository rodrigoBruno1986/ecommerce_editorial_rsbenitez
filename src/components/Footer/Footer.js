import React from "react";
import "./Footer.css";
import Fecha from "../Fecha/Fecha";

export default function Content() {
  return (
    <div className="footer-content">
      <div class="row justify-content-center">
        <div class="col-auto">
          <div className="titleFooter">Rodrigo Sebastian Benitez</div>
          <div>
            <Fecha />
          </div>
        </div>
      </div>
    </div>
  );
}
