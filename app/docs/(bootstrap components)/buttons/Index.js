"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import sub components
import SimpleButton from "./components/SimpleButton";
import OutlineButton from "./components/OutlineButton";
import SoftButton from "./components/SoftButton";
import GhostButton from "./components/GhostButton";
import TagButton from "./components/TagButton";
import ButtonSizes from "./components/ButtonSizes";
import BlockButton from "./components/BlockButton";
import IconButton from "./components/IconButton";
import ActiveButton from "./components/ActiveButton";
import DisabledButton from "./components/DisabledButton";
import ToggleButton from "./components/ToggleButton";

// import required data file
import { buttonsLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={buttonsLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Buttons</h1>
            <p className="mb-0 lead text-muted">
              Use Bootstrap’s custom button styles for actions in forms,
              dialogs, and more with support for multiple sizes, states, and
              more.
            </p>
          </div>
        </Col>
      </Row>

      <SimpleButton />
      <OutlineButton />
      <SoftButton />
      <GhostButton />
      <TagButton />
      <ButtonSizes />
      <BlockButton />
      <IconButton />
      <ActiveButton />
      <DisabledButton />
      <ToggleButton />
    </DocsInnerLayout>
  );
};

export default Index;
