"use client";

// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

// import sub components
import SampleFilter from "./components/SampleFilter";
import CategoryExample from "./components/CategoryExample";
import StoreListExample from "./components/StoreListExample";
import RatingExample from "./components/RatingExample";
import FilterHeaderExample from "./components/FilterHeaderExample";
import PricingRangeExample from "./components/PricingRangeExample";

const Index = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <div className="docs-content mx-xxl-9">
            <Row>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="mb-8" id="intro">
                  <h1 className="mb-0 fw-bold">Filter</h1>
                </div>
              </Col>
            </Row>

            <SampleFilter />
            <CategoryExample />
            <StoreListExample />
            <PricingRangeExample />
            <RatingExample />
            <FilterHeaderExample />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
