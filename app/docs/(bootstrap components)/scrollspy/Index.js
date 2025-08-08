"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import sub components
import ScrollSpyNavbar from "./components/ScrollSpyNavbar";
import NestedNavScrollSpy from "./components/NestedNavScrollSpy";
import ListGroupScrollSpy from "./components/ListGroupScrollSpy";

// import required data file
import { scrollspyLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={scrollspyLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-2 fw-bold">Scrollspy</h1>
            <p className="mb-0 lead text-muted">
              Automatically update Bootstrap navigation or list group components
              based on scroll position to indicate which link is currently
              active in the viewport.
            </p>
          </div>
        </Col>
      </Row>

      <ScrollSpyNavbar />
      <NestedNavScrollSpy />
      <ListGroupScrollSpy />
    </DocsInnerLayout>
  );
};

export default Index;
