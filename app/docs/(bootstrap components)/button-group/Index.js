"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import sub components
import BasicButtonGroup from "./components/BasicButtonGroup";
import MixedButtonGroup from "./components/MixedButtonGroup";
import OutilneButtonGroup from "./components/OutlineButtonGroup";
import CheckBoxButtonGroup from "./components/CheckBoxButtonGroup";
import ToolbarButtonGroup from "./components/ToolbarButtonGroup";
import ButtonGroupSizing from "./components/ButtonGroupSizing";
import NestingButtonGroup from "./components/NestingButtonGroup";
import VerticalButtonGroup from "./components/VerticalButtonGroup";

// import required data file
import { buttonsGroupLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={buttonsGroupLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold ">Button Group</h1>
            <p className="mb-0 lead text-muted">
              Group a series of buttons together on a single line with the
              button group, and super-power them with JavaScript.
            </p>
          </div>
        </Col>
      </Row>

      <BasicButtonGroup />
      <MixedButtonGroup />
      <OutilneButtonGroup />
      <CheckBoxButtonGroup />
      <ToolbarButtonGroup />
      <ButtonGroupSizing />
      <NestingButtonGroup />
      <VerticalButtonGroup />
    </DocsInnerLayout>
  );
};

export default Index;
