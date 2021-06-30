import React, { useEffect, useState, Fragment } from "react";
import "./ItemListContainer.css";
import ItemCounts from "../ItemCounts/ItemCounts";
import ItemList from "../ItemList/ItemList";
import Stopwach from "../../images/Stopwatch.gif";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

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
    {
      id: 23,
      name: "Book historia",
      status: "nuevo",
      precio: 2243,
      image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
    },
    {
      id: 323,
      name: "Book historia",
      status: "nuevo",
      precio: 723,
      image: "https://rickandmortyapi.com/api/character/avatar/37.jpeg",
    },
    {
      id: 3623,
      name: "Book del Arte ",
      status: "nuevo",
      precio: 7623,
      image: "https://rickandmortyapi.com/api/character/avatar/39.jpeg",
    },
    {
      id: 23,
      name: "Book maritima",
      status: "nuevo",
      precio: 7623,
      image: "https://rickandmortyapi.com/api/character/avatar/431.jpeg",
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
    return (
      <div className="loading">
        <img src={Stopwach}></img>
      </div>
    );
  }

  return (
    <Fragment>
      <div className="Item-style">
        <h1>
          {props.title} {props.name}
        </h1>
        <ItemCounts
          stock={5}
          initial={1}
          onAdd={(count) => console.log("agregado " + count)}
        />
        <ItemList resultado={dataContent} />
      </div>
      <div>
        <ItemDetailContainer />
      </div>
    </Fragment>
  );
}
