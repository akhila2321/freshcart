// import node module libraries
import { Row, Col, Card } from "react-bootstrap";

const CartHeading = () => {
  return (
    <Row>
      <Col xs={12}>
        <Card className="py-1 border-0 mb-8">
          <div>
            <h1 className="fw-bold">Shop Cart</h1>
            <p className="mb-0">Shopping in 382480</p>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default CartHeading;
