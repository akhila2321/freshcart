"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import sub components
import DefaultNavbar from "./components/DefaultNavbar";
import OffcanvasNavbar from "./components/OffcanvasNavbar";

// import required data file
import { navBarLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={navBarLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Navbar</h1>
            <p className="mb-0 lead text-muted">
              Documentation and examples for Bootstrap’s powerful, responsive
              navigation header, the navbar. Includes support for branding,
              navigation, and more, including support for our collapse plugin.
            </p>
          </div>
        </Col>
      </Row>

      <DefaultNavbar />
      <OffcanvasNavbar />
    </DocsInnerLayout>
  );
};

export default Index;
