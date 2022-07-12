import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categoria/:catid"
            element={<ItemListContainer greeting={"filtrado"} />}
          />
          <Route path="/item/:iditem" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<ItemListContainer />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
