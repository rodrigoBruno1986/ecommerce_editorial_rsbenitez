import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Pricing from "./pages/Pricing/Pricing";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CategoryContainer from "./components/CategoryContainer/CategoryContainer";
import "./App.css";

function App() {
  return (
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
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
