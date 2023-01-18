//! Card Components

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cards = () => {
  return (
    <div className="col-md-10">
      <Card>
        <Card.Img
          variant="top"
          src="/images/banner2.jpg"
          className="banner-image"
          height={400}
          width={300}
          style={{ objectFit: "fill" }}
        />
        <Card.Body>
          <Card.Title className="text-center blockquote">
            Indian Traditional Wear
          </Card.Title>
          <Card.Text className="text-center">
            Royal Western As Well As Tradtional Wear Available
          </Card.Text>
          <div class="col-md-12 text-center">
            <Button type="button" class="btn btn-primary">
              Explore
            </Button>
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
          <Card.Title className="text-center">Jeans</Card.Title>
          <Card.Text className="text-center">
            Top Quality Jeans For Casual And Formal Works
          </Card.Text>
          <div class="col-md-12 text-center">
            <Button type="button" class="btn btn-primary">
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
          <Card.Title className="text-center blockquote">
            Stylish Shoes
          </Card.Title>
          <Card.Text className="text-center font-bold">
            Confortable Shoes With Minimum 1 Year Warranty
          </Card.Text>
          <div class="col-md-12 text-center">
            <Button type="button" class="btn btn-primary">
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
          <div class="col-md-12 text-center">
            <Button type="button" class="btn btn-primary">
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
