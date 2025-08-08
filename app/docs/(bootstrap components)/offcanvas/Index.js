"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import sub components
import SampleOffcanvas from "./components/SampleOffcanvas";
import OffcanvasLiveDemo from "./components/OffcanvasLiveDemo";
import OffcanvasPlacement from "./components/OffcanvasPlacement";
import BackdropOffcanvas from "./components/BackdropOffcanvas";

// import required data file
import { offcanvasLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={offcanvasLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Offcanvas</h1>
            <p className="mb-0 lead text-muted">
              Build hidden sidebars into your project for navigation, shopping
              carts, and more with a few classes and our JavaScript plugin.
            </p>
          </div>
        </Col>
      </Row>

      <SampleOffcanvas />
      <OffcanvasLiveDemo />
      <OffcanvasPlacement />
      <BackdropOffcanvas />
    </DocsInnerLayout>
  );
};

export default Index;
