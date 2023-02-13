import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  const heading = { textShadow: "2px 2px black" };
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/topBanner1.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="d-none d-md-block">
          <h3 style={heading}>Top Quality Brands</h3>
          <p style={heading}>We Featured Top Brands For You</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/topBanner2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className="d-none d-md-block">
          <h3 style={heading}>Amazing Stock Of Clothes </h3>
          <p style={heading}>From Kids-Gents To Girls-Ladies </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/topBanner3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="d-none d-md-block">
          <h3 style={heading}>Check Our Wedding Collections</h3>
          <p style={heading}>
            Amazing Wedding Collections To Make Your Day More Special
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
