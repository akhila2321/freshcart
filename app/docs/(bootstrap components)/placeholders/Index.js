"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import sub components
import SimplePlaceholder from "./components/SimplePlaceholder";
import PlaceholderWidth from "./components/PlaceholderWidth";
import PlaceholderColor from "./components/PlaceholderColor";
import PlaceholderSize from "./components/PlaceholderSize";
import PlaceholderAnimation from "./components/PlaceholderAnimation";

// import required data file
import { placeholderLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={placeholderLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-2 display-3 fw-bold">Placeholders</h1>
            <p className="mb-0 lead text-muted">
              Use loading placeholders for your components or pages to indicate
              something may still be loading.
            </p>
          </div>
        </Col>
      </Row>

      <SimplePlaceholder />
      <PlaceholderWidth />
      <PlaceholderColor />
      <PlaceholderSize />
      <PlaceholderAnimation />
    </DocsInnerLayout>
  );
};

export default Index;
