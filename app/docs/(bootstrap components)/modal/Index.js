"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import sub components
import SampleModal from "./components/SampleModal";
import LiveDemoModal from "./components/LiveDemoModal";
import ScrollingModal from "./components/ScrollingModal";
import VerticallyCenteredModal from "./components/VerticallyCenteredModal";
import TooltipPopOverModal from "./components/TooltipPopOverModal";
import VaryingModal from "./components/VaryingModal";
import ToggleModal from "./components/ToggleModal";
import ModalSize from "./components/ModalSize";

// import required data file
import { modalLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={modalLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-2 fw-semibold mb-1 display-3">Modal</h1>
            <p className="mb-0 lead text-muted">
              Use Bootstrap’s JavaScript modal plugin to add dialogs to your
              site for lightboxes, user notifications, or completely custom
              content.
            </p>
          </div>
        </Col>
      </Row>
      <SampleModal />
      <LiveDemoModal />
      <ScrollingModal />
      <VerticallyCenteredModal />
      <TooltipPopOverModal />
      <VaryingModal />
      <ToggleModal />
      <ModalSize />
    </DocsInnerLayout>
  );
};

export default Index;
