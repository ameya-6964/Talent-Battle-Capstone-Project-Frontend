import React from "react";
import data from "../data";
/* import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card"; */

const Sports = () => {
  return (
    <main>
      <h1 className="text-center"> Featured Top Wear </h1>
      <div className="products">
        {data.topWears.map((topwear) => (
          <div className="product" key={topwear.slug}>
            <a href={`/TopWear/${topwear.slug}`}>
              <img src={topwear.image} alt={topwear.name} />
            </a>
            <div className="product-info">
              <p>{topwear.name}</p>
              <p>{topwear.price}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Sports;
