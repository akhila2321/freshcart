// import node module libraries
import { Col, Image, Card, Button } from "react-bootstrap";

const MegaMenuBanner = () => {
  return (
    <Col className="mb-4 mb-lg-0">
      <Card className="border-0">
        <Image
          src="/images/banner/menu-banner.jpg"
          alt="eCommerce HTML Template"
          className="img-fluid"
        />
        <div className="position-absolute ps-6 mt-8">
          <h5 className="mb-0">
            Dont miss this
            <br />
            offer today.
          </h5>
          <Button href="#" variant="primary" size="sm" className="mt-3">
            Shop Now
          </Button>
        </div>
      </Card>
    </Col>
  );
};

export default MegaMenuBanner;
