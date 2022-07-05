import "./App.css";
import Navbar from "./components/Navbar";
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemList />
      <ItemDetail />
    </div>
  );
}

export default App;
