import React, { useContext, useState } from "react";
import { context } from "../contex/contex";
import "./Cart.css";
import { PoweroffOutlined } from "@ant-design/icons";
import carritoimg from "../../images/foster.png";
import { Link } from "react-router-dom";
import { getFirestore } from "../../firebase/index";
import firebase from "firebase/app";
import "firebase/firestore";

import "antd/dist/antd.css";
import { List, Avatar, Button } from "antd";

export default function Cart() {
  const { cart, clear, removeItem, sumarPrecio, setCart } = useContext(context);
  const [name, setName] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState();
  const buyer = { name, telefono, email };

  const handleFinish = () => {
    const db = getFirestore();
    const order = db.collection("orders");
    const newOrder = {
      buyer: buyer,
      items: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: sumarPrecio(), //precio total
    };
    order
      .add(newOrder)
      .then(({ id }) => {
        setOrderId(id);
        setCart([]);
      })
      .catch((err) => {
        return err;
      });
    console.log("exito");
  };

  return (
    <div className="content-context">
      <div class="container">
        {cart.length != 0 ? (
          <div class="row align-items-center">
            {cart.map((el) => {
              return (
                <div class="col-12" className="contenedorCart">
                  <List itemLayout="horizontal">
                    <List.Item
                      actions={[
                        <bottom key="#" onClick={() => removeItem(el.item.id)}>
                          Eliminar
                        </bottom>,
                      ]}
                    >
                      <List.Item.Meta
                        avatar={<Avatar src={el.item.src} />}
                        title={<a href="https://ant.design">{el.item.name}</a>}
                        description={el.item.description}
                      />
                    </List.Item>
                    <div class="priceCart">
                      <h3> $ {el.item.precio}</h3>
                    </div>
                  </List>
                </div>
              );
            })}
            <h1>total : {sumarPrecio()} </h1>
            <div class="container botonEliminar">
              <div class="row align-items-center">
                <button type="button" class="btn btn-danger" onClick={clear}>
                  {" "}
                  eliminar todo{" "}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="contenidoCarritoVacio">
            <div class="col-12">
              <div class="row" className="borde">
                <div class="row align-items-center">
                  <div>
                    <img src={carritoimg}></img>
                  </div>
                  <h3>TU CARRITO ESTA VACIO !</h3>
                </div>
              </div>
            </div>

            <div class="row" className="volverCompra">
              <Link to="/">
                <Button type="primary" icon={<PoweroffOutlined />}>
                  seguir comprando
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <form>
        <legend>liscta compradores</legend>
        <p>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label>nombre</label>
        </p>
        <p>
          <input
            type="text"
            onChange={(e) => {
              setTelefono(e.target.value);
            }}
          />
          <label>telefono</label>
        </p>
        <p>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>email</label>
        </p>
      </form>
      <button onClick={handleFinish}>enviar</button>
    </div>
  );
}
