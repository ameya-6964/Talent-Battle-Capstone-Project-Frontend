import Carousel from "react-bootstrap/Carousel";

function CarouselSlide() {
  const heading = { textShadow: "2px 2px black" };
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/shoppingcara1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={heading}>Designer Shoes</h3>
          <p style={heading}>Shoes That Will Make You Stylish</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/shoppingcara2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 style={heading}>Amazing Stock Of Jeans </h3>
          <p style={heading}>From Modern To Classics We Have It All</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/shoppingcara3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={heading}>Discounted Hoodies</h3>
          <p style={heading}>Amazing Hoodies To Invest In Yourself</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlide;
