"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import required data file
import { accordionLinks } from "data/SidebarContentLinks";

// import sub components
import FlushAccordion from "./components/FlushAccordion";
import SampleAccordion from "./components/SampleAccordion";

const Index = () => {
  return (
    <DocsInnerLayout links={accordionLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Accordion</h1>
            <p className="mb-3 lead text-muted">
              Build vertically collapsing accordions in combination with our
              Collapse JavaScript plugin.
            </p>
            Official
            <Link
              href="https://getbootstrap.com/docs/5.1/components/accordion/"
              target="_blank"
              rel=""
            >
              {" "}
              Bootstrap 5 Accordion.
            </Link>
          </div>
        </Col>
      </Row>

      <SampleAccordion />
      <FlushAccordion />
    </DocsInnerLayout>
  );
};

export default Index;
