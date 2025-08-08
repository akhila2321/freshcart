"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import sub components
import SimpleBreadcrumb from "./components/SimpleBreadcrumb";
import DividerBreadcrumbs from "./components/DividerBreadcrumb";

// import required data file
import { breadcrumbsLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={breadcrumbsLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Breadcrumb</h1>
            <p className="mb-0 lead text-muted">
              Indicate the current page’s location within a navigational
              hierarchy that automatically adds separators via CSS.
            </p>
          </div>
        </Col>
      </Row>

      <SimpleBreadcrumb />
      <DividerBreadcrumbs />
    </DocsInnerLayout>
  );
};

export default Index;
