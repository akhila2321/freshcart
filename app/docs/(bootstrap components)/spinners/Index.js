"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import sub components
import BorderSpinner from "./components/BorderSpinner";
import SpinnerColor from "./components/SpinnerColor";
import GrowingSpinner from "./components/GrowingSpinner";
import SpinnerAligment from "./components/SpinnerAligment";
import SpinnerPlacement from "./components/SpinnerPlacement";
import SpinnerSize from "./components/SpinnerSize";
import SpinnerButton from "./components/SpinnerButton";

// import required data file
import { spinnerLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={spinnerLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-2 display-3 fw-bold">Spinners</h1>
            <p className="mb-0 lead text-muted">
              Indicate the loading state of a component or page with Bootstrap
              spinners, built entirely with HTML, CSS, and no JavaScript.
            </p>
          </div>
        </Col>
      </Row>

      <BorderSpinner />
      <SpinnerColor />
      <GrowingSpinner />
      <SpinnerAligment />
      <SpinnerPlacement />
      <SpinnerSize />
      <SpinnerButton />
    </DocsInnerLayout>
  );
};

export default Index;
