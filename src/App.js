import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ProductsPage from "./components/ProductsPage";
import ProductDetails from "./components/ProductDetails";
import CartPage from "./components/CartPage";

function App() {
  return (
    <>
      <Header />
      <main className="py-4">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<h2>Page not found</h2>} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
