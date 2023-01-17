import React from "react";
import { Link } from "react-router-dom";
import data from "../data";
import CarouselSlide from "./Carasoul";

const HomeScreen = () => {
  return (
    <div>
      <CarouselSlide />
      <h1> Featured Products </h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/products/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/products/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>{product.price}</strong>
              </p>
              <button>Add To Cart 🛒</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
