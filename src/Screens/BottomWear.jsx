import React from "react";
import data from "../data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Bottomwear from "../components/BottomWear/Bottomwear";

const BottomWear = () => {
  return (
    <main>
      <h1 className="text-center my-4"> Our Top Selling Products </h1>
      <div className="top-products">
        <Row>
          {data.topWears.map((bottomwear) => (
            <Col key={bottomwear.slug} sm={6} md={4} lg={3} className="mb-3">
              <Bottomwear bottomwear={bottomwear} />
            </Col>
          ))}
        </Row>
      </div>
    </main>
  );
};

export default BottomWear;
