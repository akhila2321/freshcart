"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import sub components
import BGColorBadge from "./components/BGColorBadge";
import SoftBadge from "./components/SoftBadge";
import PillBadge from "./components/PillBadge";
import ButtonBadge from "./components/ButtonBadge";
import PositionBadge from "./components/PositionBadge";
import SimpleBadge from "./components/SimpleBadge";

// import required data file
import { badgeLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={badgeLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Badges</h1>
            <p className="mb-0 lead text-muted">
              Documentation and examples for badges, our small count and
              labeling component.
            </p>
          </div>
        </Col>
      </Row>
      <BGColorBadge />
      <SoftBadge />
      <PillBadge />
      <ButtonBadge />
      <PositionBadge />
      <SimpleBadge />
    </DocsInnerLayout>
  );
};

export default Index;
