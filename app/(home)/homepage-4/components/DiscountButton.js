// import node module libraries
import { Container, Row, Col, Button } from "react-bootstrap";

const DiscountButton = () => {
  return (
    <Container className="mb-10">
      <Row>
        <Col xs={12} className="d-grid">
          <Button
            href=""
            variant="soft-warning"
            size="lg"
            className="ls-xl text-uppercase rounded-pill"
          >
            Save an extra 15% on Authorship order
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DiscountButton;
