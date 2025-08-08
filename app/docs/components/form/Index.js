"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import FreshComponentLayout from "layout/FreshComponentLayout";

// import sub components
import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";
import FormThree from "./components/FormThree";
import FormFour from "./components/FormFour";

const Index = () => {
  return (
    <FreshComponentLayout>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Form</h1>
          </div>
        </Col>
      </Row>

      <FormOne />
      <FormTwo />
      <FormThree />
      <FormFour />
    </FreshComponentLayout>
  );
};

export default Index;
