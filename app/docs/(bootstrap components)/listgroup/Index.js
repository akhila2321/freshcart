"use client";
// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import sub components
import BasicList from "./components/BasicList";
import ActiveListItem from "./components/ActiveListItem";
import DisabledListItem from "./components/DisabledListItem";
import LinkButtonListItem from "./components/LinkButtonListItem";
import FlushListItem from "./components/FlushListItem";
import NumberedListItem from "./components/NumberedListItem";
import HorizontalListItem from "./components/HorizontalListItem";
import CheckBoxListItem from "./components/CheckBoxListItem";
import ContextualListItem from "./components/ContextualListItem";

// import required data file
import { listGroupLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={listGroupLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">List Group</h1>
            <p className="mb-0 lead text-muted">
              The most basic list group is an unordered list with list items and
              the proper classes. Build upon it with the options that follow, or
              with your own CSS as needed.
            </p>
          </div>
        </Col>
      </Row>

      <BasicList />
      <ActiveListItem />
      <DisabledListItem />
      <LinkButtonListItem />
      <FlushListItem />
      <NumberedListItem />
      <HorizontalListItem />
      <CheckBoxListItem />
      <ContextualListItem />
    </DocsInnerLayout>
  );
};

export default Index;
