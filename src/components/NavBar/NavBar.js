import React from "react";
// import "antd/dist/antd.css";
// import { Menu } from "antd";
// import CardWidget from "../CardWidget/CardWidget";
import "./NavBar.css";
import logo from "../../images/icon.png";

class Navbar extends React.Component {
  render() {
    return (
      // <div className="contenido-menu">
      //   <CardWidget src={logo} />
      //   <Menu mode="horizontal">
      //     <Menu.Item key="seccion1">seccion1</Menu.Item>
      //     <Menu.Item key="seccion2">seccion2</Menu.Item>
      //     <Menu.Item key="seccion3">Contacto</Menu.Item>
      //   </Menu>
      // </div>
      <div>
        <nav class="navbar  navbar-expand-lg  navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <img className="logo" src={logo} />
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
