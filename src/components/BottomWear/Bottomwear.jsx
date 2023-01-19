import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Bottomwear = (props) => {
  const { bottomwear } = props;
  return (
    <Card>
      <Link to={`/products/${bottomwear.slug}`}>
        <img
          src={bottomwear.image}
          className="card-img-top"
          alt={bottomwear.name}
        />
      </Link>
      <Card.Body>
        <Link to={`/products/${bottomwear.slug}`}>
          <Card.Title>{bottomwear.name}</Card.Title>
        </Link>
        <Card.Text>{bottomwear.price} </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Bottomwear;
