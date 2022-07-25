import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Cart from "./components/Cart";
import CartProvider from "./context/CartContext";
function App() {
  return (
    <div className="App">
      <CartProvider value="Naza">
=======

import { CartProvider } from "./components/context/CartContext";
import Cart from "./pages/Cart";
function App() {
  return (
    <div className="App">
      <CartProvider>
>>>>>>> 502131c6b8ecce101dc53499d81dec507b3c9702
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categoria/:catid"
            element={<ItemListContainer greeting={"filtrado"} />}
          />
          <Route path="/item/:iditem" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
