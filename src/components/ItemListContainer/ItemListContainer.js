import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemCounts from "../ItemCounts/ItemCounts";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer(props) {
  const Data = [
    {
      id: 2,
      name: "Book Morty Smith",
      status: "nuevo",
      precio: 343,
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
      id: 3,
      name: "Summer Smith",
      status: "nuevo",
      precio: 2343,
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
    {
      id: 4,
      name: "Book Beth Smith",
      status: "usado",
      precio: 243,
      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    },
  ];

  const [dataContent, setDataContent] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(Data), 3000);
    }).then((dataContentResolve) => {
      setDataContent(dataContentResolve);
      // console.log(dataContentResolve);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }

  return (
    <div className="Item-style">
      <h1>
        {props.title} a {props.name}
      </h1>
      <ItemCounts
        stock={5}
        initial={1}
        onAdd={(count) => console.log("agregado " + count)}
      />
      <ItemList resultado={dataContent} />
    </div>
  );
}
