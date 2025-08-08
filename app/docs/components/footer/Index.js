"use client";

// import node module libraries
import { Row, Col, Container } from "react-bootstrap";

// import sub components
import FooterLightExample from "./components/FooterLightExample";
import FooterDarkExample from "./components/FooterDarkExample";

const Index = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <div className="docs-content mx-xxl-9">
            <Row>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="mb-8" id="intro">
                  <h1 className="mb-0 fw-bold">Footer</h1>
                </div>
              </Col>
            </Row>

            <FooterLightExample />
            <FooterDarkExample />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
