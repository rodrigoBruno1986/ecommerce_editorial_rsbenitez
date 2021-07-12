import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import Data from "../../Data";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const [item, setItem] = useState([]);

  const getItems = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(Data), 2000);
    });

  const { id } = useParams();

  useEffect(() => {
    getItems().then((dataContentResolve) => {
      dataContentResolve.filter((el) => {
        if (el.id === id) {
          setItem(el);
        } else {
        }
      });
    });
  }, []);

  return (
    <div>
      <ItemDetail
        name={item.name}
        src={item.image}
        precio={item.precio}
        description={item.description}
        id={item.id}
      />
    </div>
  );
}

//asinc para llamar a una api

// const getCharacter = async () => {
//   const response = await fetch("http del api");
//   const dataInfo = await response.json();
//   setItem(dataInfo);
// };

// useEffect(()=>{
//   getCharacter();
// })
