import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

/* import "../index.css"; */

const Cards = () => {
  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src="/images/banner2.jpg"
          className="banner-image"
          width={700}
          height={400}
        />
        <Card.Body>
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
        />
        <Card.Body>
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
        <Card.Img variant="top" src="/images/shoesbanner.jpg" height={400} />
        <Card.Body>
          <Card.Text className="text-center font-bold">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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
