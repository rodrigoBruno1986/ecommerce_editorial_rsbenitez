import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />,
      <ItemListContainer title="Bienvenido" name="Coder House" />,
    </div>
  );
}

export default App;
