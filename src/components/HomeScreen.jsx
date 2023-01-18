//! HomeScreen Component
import React from "react";
import data from "../data";
import CarouselSlide from "./Carasoul";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "./Product";
import Content from "./Content";

const HomeScreen = () => {
  return (
    <div>
      <CarouselSlide />
      {/* //! Top Selling Products Are Imported Here */}
      <h1 className="text-center my-4"> Our Top Selling Products </h1>
      <div className="products">
        <Row>
          {data.products.map((product) => (
            <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
              <Product product={product} />
            </Col>
          ))}
          <Content /> {/* //! Content Is Imported Here */}
        </Row>
      </div>
    </div>
  );
};

export default HomeScreen;
