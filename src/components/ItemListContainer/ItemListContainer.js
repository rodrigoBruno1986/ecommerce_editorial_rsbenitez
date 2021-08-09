import React, { useEffect, useState, Fragment } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Data from "../../Data";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import { Spin } from "antd";
import { getFirestore } from "../../firebase/index";

export default function ItemListContainer(props) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const contentStyle = {
    height: "360px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollecition = db.collection("items");

    itemCollecition
      .get()
      .then((querySnapshot) => {
        if (querySnapshot === 0) {
          console.log("no resultado");
        } else {
          const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setItems(data);
        }
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log("el items de firebase es =>", items);

  return (
    <Fragment>
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      ,
      <div className="Item-style">
        <h1>
          {props.title} {props.name}
        </h1>

        <ItemList resultado={items} />
      </div>
    </Fragment>
  );
}
