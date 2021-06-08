import React from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";

function Navbar() {
  return (
    <div className="contenido-menu">
      <img src={Image} alt="" />
      <Menu mode="horizontal">
        <Menu.Item key="seccion1">seccion1</Menu.Item>
        <Menu.Item key="seccion2">seccion2</Menu.Item>
        <Menu.Item key="seccion3">Contacto</Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar;
