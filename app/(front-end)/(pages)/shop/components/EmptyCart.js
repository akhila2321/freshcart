// import node module libraries
import { Row, Col, Button } from "react-bootstrap";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <Row>
      <Col xs={12} md={12} lg={12} xl={12}>
        <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
          <h2>Opps!</h2>
          <p className="fs-3">Your cart is empty</p>

          <Button
            variant="primary"
            className="mt-2"
            as={Link}
            href="/shop/shop-grid"
          >
            Visit Our Shop
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default EmptyCart;
