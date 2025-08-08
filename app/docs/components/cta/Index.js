"use client";

// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

// import sub components
import CTAOne from "./components/CTAOne";
import CTATwo from "./components/CTATwo";
import CTAThree from "./components/CTAThree";
import CTAFour from "./components/CTAFour";
import CTAFive from "./components/CTAFive";
import CTASix from "./components/CTASix";
import CTASeven from "./components/CTASeven";

const Index = () => {
  return (
    <Container>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <div className="docs-content mx-xxl-9">
            <Row>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="mb-8" id="intro">
                  <h1 className="mb-0 fw-bold">CTA</h1>
                </div>
              </Col>
            </Row>
            {/* CTA One */}
            <CTAOne />
            <CTATwo />
            <CTAThree />
            <CTAFour />
            <CTAFive />
            <CTASix />
            <CTASeven />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
