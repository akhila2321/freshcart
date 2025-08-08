"use client";

// import node module libraries
import { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import sub components
import Sizing from "./components/Sizing";
import Switches from "./components/Switches";
import FormControls from "./components/FormControls";
import RangeControl from "./components/RangeControl";
import ChecksAndRadios from "./components/ChecksAndRadios";
import ValidationStates from "./components/ValidationStates";
import FormSelectControls from "./components/FormSelectControls";
import DisabledAndReadonly from "./components/DisabledAndReadonly";

// import required data file
import { basicFormLinks } from "data/SidebarContentLinks";

// import required hooks
import { useMounted } from "hooks/useMounted";

const Index = () => {
  const hasMounted = useMounted();
  return (
    <DocsInnerLayout links={basicFormLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-2 display-3 fw-bold">Forms</h1>
            <p className="mb-0 lead text-muted">
              Examples and usage guidelines for form control styles, layout
              options, and custom components for creating a wide variety of
              forms.
            </p>
          </div>
        </Col>
      </Row>
      {hasMounted &&

        <Fragment>
          {/* Form Controls */}
          <FormControls />

          {/* Sizing */}
          <Sizing />

          {/* Form Select */}
          <FormSelectControls />

          {/* Checks and radios */}
          <ChecksAndRadios />

          {/* Switches */}
          <Switches />

          {/* Validation states */}
          <ValidationStates />

          {/* Disabled & Readonly Fields */}
          <DisabledAndReadonly />

          {/* Range */}
          <RangeControl />

        </Fragment>
      }

    </DocsInnerLayout>
  );
};

export default Index;