"use client";

// import node module libraries
import { Row, Col, Container } from "react-bootstrap";

// import custom components
import WishlistExample from "./components/WishlistExample";
import OrderExample from "./components/OrderExample";

const Index = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <div className="docs-content mx-xxl-9">
            <Row>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="mb-8" id="intro">
                  <h1 className="mb-0 fw-bold">Table</h1>
                </div>
              </Col>
            </Row>

            <WishlistExample />
            <OrderExample />

          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
