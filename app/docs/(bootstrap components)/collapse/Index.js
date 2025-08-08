"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import sub components
import SimpleCollapse from "./components/SimpleCollapse";
import MultiTargetCollapse from "./components/MultiTargetCollapse";
import HorizontalCollapse from "./components/HorizontalCollapse";
import AccordionExample from "./components/AccordionExample";

// import required data file
import { collapseLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={collapseLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Collapse</h1>
            <p className="mb-0 lead text-muted">
              Toggle the visibility of content across your project with a few
              classes and our JavaScript plugins.
            </p>
          </div>
        </Col>
      </Row>

      <SimpleCollapse />
      <MultiTargetCollapse />
      <HorizontalCollapse />
      <AccordionExample />
    </DocsInnerLayout>
  );
};

export default Index;
