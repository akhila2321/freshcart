"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import sub components
import DefaultProgressBar from "./components/DefaultProgressBar";
import MultiProgressBar from "./components/MultiProgressBar";

// import required data file
import { progressLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={progressLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Progress</h1>
            <p className="mb-0 lead text-muted">
              Documentation and examples for using Bootstrap custom progress
              bars featuring support for stacked bars, animated backgrounds, and
              text labels.
            </p>
          </div>
        </Col>
      </Row>
      <DefaultProgressBar />
      <MultiProgressBar />
    </DocsInnerLayout>
  );
};

export default Index;
