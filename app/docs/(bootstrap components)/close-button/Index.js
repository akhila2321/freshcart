"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import custom components
import SimpleCloseButton from "./components/SimpleCloseButton";
import DisbaledCloseButton from "./components/DisbaledCloseButton";
import WhiteCloseButton from "./components/WhiteCloseButton";

const Index = () => {
  return (
    <DocsInnerLayout isOpen={false}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Close Button</h1>
            <p className="mb-0 lead text-muted">
              A generic close button for dismissing content like modals and
              alerts.
            </p>
          </div>
        </Col>
      </Row>

      {/* Close Button */}
      <SimpleCloseButton />
      <DisbaledCloseButton />
      <WhiteCloseButton />
    </DocsInnerLayout>
  );
};

export default Index;
