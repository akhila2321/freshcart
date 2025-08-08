"use client";

// import node module libraries
import { Row, Col, Container } from "react-bootstrap";

// import sub components
import SliderOneExample from "./components/SliderOneExample";
import SliderTwoExample from "./components/SliderTwoExample";
import SliderThreeExample from "./components/SliderThreeExample";
import SliderFourExample from "./components/SliderFourExample";

const Index = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <div className="docs-content mx-xxl-9">
            <Row>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="mb-8" id="intro">
                  <h1 className="mb-0 fw-bold">Slider</h1>
                </div>
              </Col>
            </Row>
            <SliderOneExample />
            <SliderTwoExample />
            <SliderThreeExample />
            <SliderFourExample />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
