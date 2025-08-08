"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import sub components
import SimpleTable from "./components/SimpleTable";
import TablewithHead from "./components/TablewithHead";
import StripedRowsTable from "./components/StripedRowsTable";
import BorderedTable from "./components/BorderedTable";
import HoverableTable from "./components/HoverableTable";
import ResponsiveTable from "./components/ResponsiveTable";
import TableVariants from "./components/TableVariants";
import SmallTable from "./components/SmallTable";
import ActiveTable from "./components/ActiveTable";
import NestingTable from "./components/NestingTable";

// import required data file
import { tableLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={tableLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold ">Tables</h1>
            <p className="mb-0 lead text-muted">
              Documentation and examples for opt-in styling of tables (given
              their prevalent use in JavaScript plugins) with Bootstrap.
            </p>
          </div>
        </Col>
      </Row>
      <SimpleTable />
      <TablewithHead />
      <StripedRowsTable />
      <BorderedTable />
      <HoverableTable />
      <SmallTable />
      <TableVariants />
      <ResponsiveTable />
      <ActiveTable />
      <NestingTable />
    </DocsInnerLayout>
  );
};

export default Index;
