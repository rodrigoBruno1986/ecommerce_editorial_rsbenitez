import React, { useState } from "react";
import "antd/dist/antd.css";
import "./ItemDetail.css";
import ItemCounts from "../ItemCounts/ItemCounts";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function ItemDetail(props) {
  const [quantityToAdd, setquantityToAdd] = useState(false);

  return (
    <div className="CardItem">
      <div class="col-md-8">
        <div class="row justify-content-md-center g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col-auto d-none d-lg-block">
            <img src={props.src} />
          </div>
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">
              Número de id : {props.id}
            </strong>
            <h3 class="mb-0">{props.name}</h3>
            <p class="card-text mb-auto">{props.description}</p>
            <h4 class="card-text mb-auto">${props.precio}</h4>
            <div className="content-count">
              {quantityToAdd === true ? (
                <Link to="/carts">
                  <Button type="primary">Termina tu compra</Button>
                </Link>
              ) : (
                <ItemCounts
                  stock={5}
                  initial={1}
                  onAdd={(count) => {
                    setquantityToAdd(true);
                    alert(`Se agregaron ${count} items`);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
