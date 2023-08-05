import React from "react";
import "./App.css";
import "./styles/scss/styles.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import { Home, Games, Game, About, Contact, Cart, Checkout } from "./pages";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/game/:id" element={<Game />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;
