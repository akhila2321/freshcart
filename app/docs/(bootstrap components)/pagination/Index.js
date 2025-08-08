"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import sub components
import DefaultPagination from "./components/DefaultPagination";
import PaginationWithIcon from "./components/PaginationWithIcon";
import DisabledActivePagination from "./components/DisabledActivePagination";
import PaginationSize from "./components/PaginationSize";
import PaginationAlignment from "./components/PaginationAlignment";

// import required data file
import { paginationLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={paginationLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-2 display-3 fw-bold">Pagination</h1>
            <p className="mb-0 lead text-muted">
              Documentation and examples for showing pagination to indicate a
              series of related content exists across multiple pages.
            </p>
          </div>
        </Col>
      </Row>

      <DefaultPagination />
      <PaginationWithIcon />
      <DisabledActivePagination />
      <PaginationSize />
      <PaginationAlignment />
    </DocsInnerLayout>
  );
};

export default Index;
