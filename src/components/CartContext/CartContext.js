import React, { useContext } from "react";
import { context } from "../contex/contex";
import "./CardContext.css";
export default function CartContext() {
  const { cart, setCart, clear, removeItem } = useContext(context);
  return (
    <div className="content-context">
      <div class="container">
        <div class="row align-items-center">
          {cart.map((el) => {
            return (
              <div class="col-4">
                <div class="card">
                  <img
                    className="imgItem"
                    src={el.item.src}
                    class="card-img-top"
                    alt="..."
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">{el.item.name}</h5>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">{el.item.description}</li>
                      <li class="list-group-item">$ {el.item.precio}</li>
                    </ul>

                    <div class="card-body">
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={() => removeItem(el.item.id)}
                      >
                        eliminar del carrito
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div class="container botonEliminar">
        <div class="row align-items-center">
          <button type="button" class="btn btn-danger" onClick={clear}>
            {" "}
            eliminar todo{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
