import React from "react";
import data from "../data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Topwear from "../components/TopWear/Topwear";
import Banner from "../components/TopWear/Banner";

const TopWear = () => {
  return (
    <main>
      <h1 className="text-center my-4"> Featured Top Wear</h1>
      <div className="top-products">
        <Row>
          {data.topWears.map((topwear) => (
            <Col key={topwear.slug} sm={6} md={4} lg={3} className="mb-3">
              <Topwear topwear={topwear} />
            </Col>
          ))}
        </Row>
        <Banner />
        <h1 className="text-center my-4"> Top Collection For Male Customers</h1>
      </div>
    </main>
  );
};

export default TopWear;
