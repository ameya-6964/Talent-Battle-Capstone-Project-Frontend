import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Sportlist = (props) => {
  const { sport } = props;
  return (
    <Card>
      <Link to={`/products/${sport.slug}`}>
        <img src={sport.image} className="card-img-top" alt={sport.name} />
      </Link>
      <Card.Body>
        <Link to={`/products/${sport.slug}`}>
          <Card.Title>{sport.name}</Card.Title>
        </Link>
        <Card.Text>{sport.price} </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Sportlist;
