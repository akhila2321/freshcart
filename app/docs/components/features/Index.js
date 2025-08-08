"use client";

// import node module libraries
import { Row, Col, Container } from "react-bootstrap";

// import sub components
import FeatureOne from "./components/FeatureOne";
import FeatureTwo from "./components/FeatureTwo";

const Index = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <div className="docs-content mx-xxl-9">
            <Row>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="mb-8" id="intro">
                  <h1 className="mb-0 fw-bold">Features</h1>
                </div>
              </Col>
            </Row>

            <FeatureOne />
            <FeatureTwo />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
