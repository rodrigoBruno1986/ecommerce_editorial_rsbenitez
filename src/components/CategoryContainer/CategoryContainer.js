import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import Data from "../../Data";
import "./CategoryContainer.css";
import { useParams } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";

const { Content } = Layout;

export default function CategoryContainer() {
  const [item, setItem] = useState([]);

  const getItems = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(Data), 2000);
    });

  const { especie } = useParams();

  useEffect(() => {
    getItems().then((dataContentResolve) => {
      const itemFiltrado = dataContentResolve.filter(
        (item) => item.genero === especie
      );
      setItem(itemFiltrado);
    });
  }, [especie]);

  console.log(item);

  return (
    <Content style={{ padding: "0 50px" }}>
      <div className="containerCategoyId">
        {item ? (
          item.map((el) => (
            <Item
              src={el.image}
              name={el.name}
              precio={el.precio}
              id={el.id}
              genero={el.genero}
            />
          ))
        ) : (
          <span>Cargando elementos ...</span>
        )}
      </div>
    </Content>
  );
}
