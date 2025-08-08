"use client";

// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import template components
import FreshComponentLayout from "layout/FreshComponentLayout";

// import custom components
import CustomTab from "components/common/CustomTab";
import TestimonialsCard from "components/cards/TestimonialsCard";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { testimonialsData } from "data/TestimonialsData";
import { TestimonialExampleCode } from "data/code/components-code/TestimonialsCode";

const Index = () => {
  return (
    <FreshComponentLayout>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Testimonials</h1>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane
                title="Design"
                eventKey={"design"}
                className="bg-light p-4"
              >
                <Row>
                  <Col lg={6}>
                    <TestimonialsCard data={testimonialsData} />
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={TestimonialExampleCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </FreshComponentLayout>
  );
};

export default Index;
