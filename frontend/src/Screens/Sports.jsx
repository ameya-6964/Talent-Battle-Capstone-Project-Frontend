import React from "react";
import data from "../data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sportlist from "../components/Sports/sports";

const Sports = () => {
  return (
    <main>
      <h1 className="text-center my-4"> Our Top Selling Products </h1>
      <div className="top-products">
        <Row>
          {data.topWears.map((sport) => (
            <Col key={sport.slug} sm={6} md={4} lg={3} className="mb-3">
              <Sportlist sport={sport} />
            </Col>
          ))}
          {/* //! Content Is Imported Here */}
        </Row>
      </div>
    </main>
  );
};

export default Sports;
