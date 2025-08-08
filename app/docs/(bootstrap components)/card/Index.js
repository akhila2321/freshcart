"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import sub components
import BasicExampleCard from "./components/BasicExampleCard";
import CardBodyExample from "./components/CardBodyExample";
import CardTitleExample from "./components/CardTitleExample";
import KitchenSinkCard from "./components/KitchenSinkCard";
import CardHeaderFooter from "./components/CardHeaderFooter";
import TextAlignmentCard from "./components/TextAlignmentCard";
import CardImages from "./components/CardImages";
import HorizontalCard from "./components/HorizontalCard";
import CardLayout from "./components/CardLayout";

// import required data file
import { cardLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={cardLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold ">Card</h1>
            <p className="mb-0 lead text-muted">
              Cards component provides a flexible and extensible content
              container with multiple variants and options.
            </p>
          </div>
        </Col>
      </Row>

      <BasicExampleCard />
      <CardBodyExample />
      <CardTitleExample />
      <KitchenSinkCard />
      <CardHeaderFooter />
      <TextAlignmentCard />
      <CardImages />
      <HorizontalCard />
      <CardLayout />
    </DocsInnerLayout>
  );
};

export default Index;
