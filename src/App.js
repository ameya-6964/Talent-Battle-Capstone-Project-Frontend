import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import TopWear from "./Screens/TopWear";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <main>
        <Container>
          <Routes>
            <Route path="/products/:slug" element={<ProductScreen />}></Route>
            <Route path="/" element={<HomeScreen />}></Route>
            <Route path="/topWear" element={<TopWear />}></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
