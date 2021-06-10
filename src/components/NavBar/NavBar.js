import React from "react";
import "antd/dist/antd.css";
import { Menu } from "antd";
import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css";
import logo from "../../images/icon.png";

class Navbar extends React.Component {
  render() {
    return (
      <div className="contenido-menu">
        <CardWidget src={logo} />
        <Menu mode="horizontal">
          <Menu.Item key="seccion1">seccion1</Menu.Item>
          <Menu.Item key="seccion2">seccion2</Menu.Item>
          <Menu.Item key="seccion3">Contacto</Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
