import React from "react";
import "./NavBar.css";
import logo from "../../images/icon.png";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Menu, Dropdown } from "antd";

export default function Navbar() {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Link to="/categoria/hombre">Hombres</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/categoria/mujer">Mujeres</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="navbar-content">
      <nav class="navbar  navbar-expand-lg  navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a>
            <Link to="/">
              <img className="logo" src={logo} />
            </Link>
          </a>

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
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link to="/pricing">Pricing</Link>
                </a>
              </li>
              <div className="itemDrop">
                <li class="nav-item">
                  <Dropdown overlay={menu}>
                    <a class="nav-link" href="#">
                      Categorias
                    </a>
                  </Dropdown>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
