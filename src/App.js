import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import ProductScreen from "./components/ProductScreen";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <main>
        <Container>
          <Routes>
            <Route path="/products/:slug" element={<ProductScreen />}></Route>
            <Route path="/" element={<HomeScreen />}></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
