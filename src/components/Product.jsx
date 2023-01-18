import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Product = (props) => {
  const { product } = props;
  return (
    <Card>
      <Link to={`/products/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/products/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text>{product.price} </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
