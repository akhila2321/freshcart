// import node module libraries
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

const CustomerOrderInfo = () => {
  return (
    <div className="mt-8">
      <Row>
        <Col lg="4" md="4" xs="12">
          <div className="mb-6">
            <h6>Customer Details</h6>
            <p className="mb-1 lh-lg">
              John Alex
              <br />
              anderalex@example.com
              <br />
              +998 99 22123456
            </p>
            <Link href="#">View Profile</Link>
          </div>
        </Col>

        <Col lg="4" md="4" xs="12">
          <div className="mb-6">
            <h6>Shipping Address</h6>
            <p className="mb-1 lh-lg">
              Gerg Harvell
              <br />
              568, Suite Ave.
              <br />
              Austrlia, 235153
              <br />
              Contact No. +91 99999 12345
            </p>
          </div>
        </Col>

        <Col lg="4" md="4" xs="12">
          <div className="mb-6">
            <h6>Order Details</h6>
            <p className="mb-1 lh-lg">
              Order ID:
              <span className="text-dark">FC001</span>
              <br />
              Order Date:
              <span className="text-dark">October 22, 2023</span>
              <br />
              Order Total:
              <span className="text-dark">$734.28</span>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CustomerOrderInfo;
