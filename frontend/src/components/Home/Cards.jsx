//! Card Components

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";

const Cards = () => {
  return (
    <div className="col-md-12">
      <Card>
        <Card.Img
          variant="top"
          src="/images/banner2.jpg"
          className="banner-image"
          height={400}
          width={300}
          style={{ objectFit: "inital" }}
        />
        <Card.Body>
          <Card.Title className="text-center blockquote">Top Wear</Card.Title>
          <Card.Text className="text-center">
            All Kinds Of Top Wear From Casual Shirts To Formal Shorts, Indian
            Traditional Wear and Suits are Also Part of Our Catalogue
          </Card.Text>
          <div className="col-md-12 text-center">
            <LinkContainer to="/TopWear">
              <Button type="button" className="btn btn-primary">
                Explore
              </Button>
            </LinkContainer>
          </div>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Img
          variant="top"
          src="/images/bannerJeans.jpg"
          width={700}
          height={400}
          style={{ objectFit: "fill" }}
        />
        <Card.Body>
          <Card.Title className="text-center">Bottom Wear</Card.Title>
          <Card.Text className="text-center">
            Form High Quality Jeans To High Quality Formal Trousers We Have Got
            It All
          </Card.Text>
          <div className="col-md-12 text-center">
            <Button type="button" className="btn btn-primary">
              Explore
            </Button>
          </div>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Img
          variant="top"
          src="/images/shoesbanner.jpg"
          height={400}
          style={{ objectFit: "fill" }}
        />
        <Card.Body>
          <Card.Title className="text-center blockquote">Footwear</Card.Title>
          <Card.Text className="text-center font-bold">
            Confortable Shoes, Budget Friendly And Exclusive Collections
          </Card.Text>
          <div className="col-md-12 text-center">
            <Button type="button" className="btn btn-primary">
              Explore
            </Button>
          </div>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Img
          variant="top"
          src="/images/sportsBanner.jpg"
          height={400}
          style={{ objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title className="text-center blockquote">
            Authentic Sports Wear
          </Card.Title>
          <Card.Text className="text-center font-bold">
            Designed To Tackle Your Any Sports Challenges
          </Card.Text>
          <div className="col-md-12 text-center">
            <Button type="button" className="btn btn-primary">
              Explore
            </Button>
          </div>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
};

export default Cards;
