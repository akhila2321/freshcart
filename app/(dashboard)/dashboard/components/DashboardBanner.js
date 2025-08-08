// import node module libraries
import { Row, Col, Card, Button } from "react-bootstrap";

const DashboardBanner = () => {
  return (
    <Row className="mb-8">
      <Col md={12}>
        <Card
          bg="light"
          className="border-0 rounded-4"
          style={{
            backgroundImage: "url(/images/slider/slider-image-1.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Card.Body className="p-lg-12">
            <h1>Welcome back! FreshCart</h1>
            <p>
              FreshCart is simple & clean design for developer and designer.
            </p>
            <Button variant="primary">Create Product</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardBanner;
