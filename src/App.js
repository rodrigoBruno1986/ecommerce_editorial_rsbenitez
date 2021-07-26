import React, { useState, useEffect } from "react";
import { getFirestore } from "./firebase";
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
  const [loading, setLoading] = useState(false);

  const [items, setItems] = useState([]);
  // const [itemDetail, setItemDetail] = (useState = {});

  // const itemId = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollecition = db.collection("items");

    // const item = itemCollecition(itemId);

    // item.get().then((doc) => {
    //   if (!doc.exist) {
    //     console.log("item no existe");
    //     return;
    //   }
    //   setItemDetail({ id: doc.id, ...doc.data() });
    // });
    itemCollecition
      .get()
      .then((querySnapshot) => {
        if (querySnapshot === 0) {
          console.log("no resultado");
        } else {
          setItems(querySnapshot.docs.map((doc) => doc.data()));
        }
      })
      .catch((error) => {
        console.log("error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log("items aca =>", items);

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
