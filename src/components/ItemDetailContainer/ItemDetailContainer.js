import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import Stopwach from "../../images/Stopwatch.gif";

export default function ItemDetailContainer() {
  const Data_new = [
    {
      id: 232,
      name: "Book Morty Smith",
      status: "usado",
      precio: 343,
      description: "ultimo numero",
      image: "https://rickandmortyapi.com/api/character/avatar/22.jpeg",
    },
  ];

  const [item, setItem] = useState([{}]);
  const [load, setLoad] = useState(false);

  const getItems = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(Data_new), 2000);
    });

  useEffect(() => {
    setLoad(true);
    getItems().then((dataContentResolve) => {
      setItem(dataContentResolve);
      setLoad(false);
    });
  }, []);

  if (load) {
    return (
      <div className="load">
        <img src={Stopwach}></img>
      </div>
    );
  }

  return (
    <div>
      <ItemDetail
        name={item[0].name}
        src={item[0].image}
        precio={item[0].precio}
      />
    </div>
  );
}
