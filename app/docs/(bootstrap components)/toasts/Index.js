"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import sub components
import BasicToasts from "./components/BasicToasts";
import TranslucentToasts from "./components/TranslucentToasts";
import StackingToasts from "./components/StackingToasts";
import CustomContentToast from "./components/CustomContentToast";
import ColorToast from "./components/ColorToast";
import ToastPlacement from "./components/ToastPlacement";
import AccessibilityToast from "./components/AccessibilityToast";

// import required data file
import { toastLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={toastLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Toasts</h1>
            <p className="mb-0 lead text-muted">
              Push notifications to your visitors with a toast, a lightweight
              and easily customizable alert message.
            </p>
          </div>
        </Col>
      </Row>
      <BasicToasts />
      <TranslucentToasts />
      <StackingToasts />
      <CustomContentToast />
      <ColorToast />
      <ToastPlacement />
      <AccessibilityToast />
    </DocsInnerLayout>
  );
};

export default Index;
