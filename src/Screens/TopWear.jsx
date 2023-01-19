import React from "react";
import data from "../data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Topwear from "../components/TopWear/Topwear";

const TopWear = () => {
  return (
    <main>
      <h1 className="text-center my-4"> Our Top Selling Products </h1>
      <div className="products">
        <Row>
          {data.topWears.map((topwear) => (
            <Col key={topwear.slug} sm={6} md={4} lg={3} className="mb-3">
              <Topwear topwear={topwear} />
            </Col>
          ))}
          {/* //! Content Is Imported Here */}
        </Row>
      </div>
    </main>
  );
};

export default TopWear;
