"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import sub components
import DefaultPopover from "./components/DefaultPopover";

// import required data file
import { popoversLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={popoversLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-2 display-3 fw-bold">Popovers</h1>
            <p className="mb-0 lead text-muted">
              Documentation and examples for adding Bootstrap popovers, like
              those found in iOS, to any element on your site.
            </p>
          </div>
        </Col>
      </Row>

      <DefaultPopover />
    </DocsInnerLayout>
  );
};

export default Index;
