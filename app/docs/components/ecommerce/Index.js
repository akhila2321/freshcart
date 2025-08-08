"use client";

// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

// import sub components
import OrderDetailsExample from "./components/OrderDetailsExample";
import CheckoutExample from "./components/CheckoutExample";
import EcommerceExampleOne from "./components/EcommerceExampleOne";
import EcommerceExampleThree from "./components/EcommerceExampleThree";

const Index = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <div className="docs-content mx-xxl-9">
            <Row>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="mb-8" id="intro">
                  <h1 className="mb-0 fw-bold display-3">Ecommerce</h1>
                </div>
              </Col>
            </Row>
            <EcommerceExampleOne />
            <CheckoutExample />
            <EcommerceExampleThree />
            <OrderDetailsExample />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
