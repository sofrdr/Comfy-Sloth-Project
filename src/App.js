import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer, Sidebar } from "./components";
import {
  Home,
  About,
  Cart,
  Products,
  SingleProduct,
  Checkout,
  ErrorPage,
} from "./pages";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsItems } from "./features/productsSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsItems());
  }, []);
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
