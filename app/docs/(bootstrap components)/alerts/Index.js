"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import required data files
import { alertLinks } from "data/SidebarContentLinks";

// import sub components
import SimpleAlert from "./components/SimpleAlert";
import LiveAlert from "./components/LiveAlert";
import LinkColorAlert from "./components/LinkColorAlert";
import AdditionalConentAlert from "./components/AdditionalConentAlert";
import IconAlert from "./components/IconAlert";
import DismissingAlert from "./components/DismissingAlert";

const Index = () => {
  return (
    <DocsInnerLayout links={alertLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Alerts</h1>
            <p className="mb-6 lead text-muted">
              Provide contextual feedback messages for typical user actions with
              the handful of available and flexible alert messages.
            </p>
          </div>
        </Col>
      </Row>
      <SimpleAlert />
      <LiveAlert />
      <LinkColorAlert />
      <AdditionalConentAlert />
      <IconAlert />
      <DismissingAlert />
    </DocsInnerLayout>
  );
};

export default Index;
