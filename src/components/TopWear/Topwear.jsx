import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Topwear = (props) => {
  const { topwear } = props;
  return (
    <Card>
      <Link to={`/products/${topwear.slug}`}>
        <img src={topwear.image} className="card-img-top" alt={topwear.name} />
      </Link>
      <Card.Body>
        <Link to={`/products/${topwear.slug}`}>
          <Card.Title>{topwear.name}</Card.Title>
        </Link>
        <Card.Text>{topwear.price} </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Topwear;
