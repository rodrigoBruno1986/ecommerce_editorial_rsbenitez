import React, { useState, useContext } from "react";
import "antd/dist/antd.css";
import "./ItemDetail.css";
import ItemCounts from "../ItemCounts/ItemCounts";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { context } from "../contex/contex";

export default function ItemDetail(props) {
  const [quantityToAdd, setquantityToAdd] = useState(false);

  const { addToCart } = useContext(context);

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
                <Link to="/cart">
                  <Button type="primary">Termina tu compra</Button>
                </Link>
              ) : (
                <ItemCounts
                  stock={5}
                  initial={1}
                  onAdd={(count) => {
                    setquantityToAdd(true);
                    addToCart(props, count);
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
