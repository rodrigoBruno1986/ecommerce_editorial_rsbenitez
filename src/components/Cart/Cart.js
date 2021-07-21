import React from "react";
export default function CartContext() {

const { cart } = useContext(context);

export default function Cart() {
    console.log(cart)
  return <div>carrito contenido </div>;
}
