import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const Footwear = (props) => {
  const { foot } = props;
  return (
    <Card>
      <Link to={`/products/${foot.slug}`}>
        <img src={foot.image} className="card-img-top" alt={foot.name} />
      </Link>
      <Card.Body>
        <Link to={`/products/${foot.slug}`}>
          <Card.Title>{foot.name}</Card.Title>
        </Link>
        <Card.Text>{foot.price} </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Footwear;
