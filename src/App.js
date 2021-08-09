import React, { useState, useEffect } from "react";

import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Pricing from "./pages/Pricing/Pricing";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import CategoryContainer from "./components/CategoryContainer/CategoryContainer";
import { CartProvider } from "./components/contex/contex";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/pricing">
            <Pricing />
          </Route>
          <Route exact path="/itemDetail/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/categoria/:especie">
            <CategoryContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
