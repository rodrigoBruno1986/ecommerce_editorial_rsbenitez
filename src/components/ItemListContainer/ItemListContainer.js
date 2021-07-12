import React, { useEffect, useState, Fragment } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Data from "../../Data";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import { Spin } from "antd";

export default function ItemListContainer(props) {
  const [dataContent, setDataContent] = useState([]);
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
        <Spin />
      </div>
    );
  }

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

        <ItemList resultado={dataContent} />
      </div>
    </Fragment>
  );
}
