import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Cart,
  Products,
  SingleProduct,
  Checkout,
  ErrorPage,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
