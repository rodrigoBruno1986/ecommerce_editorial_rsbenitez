import React, { useEffect, useState, Fragment } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Stopwach from "../../images/Stopwatch.gif";
import Data from "../../Data";

export default function ItemListContainer(props) {
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

        <ItemList resultado={dataContent} />
      </div>
    </Fragment>
  );
}
