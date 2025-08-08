"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import sub components
import MenuNav from "./components/MenuNav";
import HorizontalMenu from "./components/HorizontalMenu";
import VerticalMenu from "./components/VerticalMenu";
import TabsMenu from "./components/TabsMenu";
import FlexMenu from "./components/FlexMenu";
import HorizontalPills from "./components/HorizontalPills";

// import required data file
import { NavTabLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={NavTabLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Navs and tabs</h1>
            <p className="mb-0 lead text-muted">
              Documentation and examples for how to use Bootstrap’s included
              navigation components.
            </p>
          </div>
        </Col>
      </Row>
      <MenuNav />
      <HorizontalMenu />
      <VerticalMenu />
      <TabsMenu />
      <FlexMenu />
      <HorizontalPills />
    </DocsInnerLayout>
  );
};

export default Index;
