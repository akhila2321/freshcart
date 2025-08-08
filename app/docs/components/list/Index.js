"use client";

// import template components
import FreshComponentLayout from "layout/FreshComponentLayout";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import sub components
import ListOne from "./components/ListOne";
import ListTwo from "./components/ListTwo";
import ListThree from "./components/ListThree";

const Index = () => {
  return (
    <FreshComponentLayout>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">List</h1>
          </div>
        </Col>
      </Row>

      <ListOne />
      <ListTwo />
      <ListThree />
    </FreshComponentLayout>
  );
};

export default Index;
