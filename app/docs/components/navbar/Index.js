"use client";

// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

// import sub components
import NavbarOneExample from "./components/NavbarOneExample";
import NavbarTwoExample from "./components/NavbarTwoExample";
import NavbarThreeExample from "./components/NavbarThreeExample";
import NavbarFourExample from "./components/NavbarFourExample";
import NavbarFiveExample from "./components/NavbarFiveExample";

const Index = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <div className="docs-content mx-xxl-9">
            <Row>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="mb-8" id="intro">
                  <h1 className="mb-0 fw-bold">Navbar</h1>
                </div>
              </Col>
            </Row>

            <NavbarOneExample />
            <NavbarTwoExample />
            <NavbarThreeExample />
            <NavbarFourExample />
            <NavbarFiveExample />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
