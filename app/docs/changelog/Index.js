"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import required data files
import { changelogLinks } from "data/SidebarContentLinks";
import Version_01_01_00 from "./components/Version_01_01_00";
import Version_01_00_00 from "./components/Version_01_00_00";

const Index = () => {
  return (
    <DocsInnerLayout links={changelogLinks}>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-7">
            <h1 className="mb-0 fw-bold">Changelog</h1>
            <p className="mb-6 lead text-muted">
              Stay up to date with all of the latest additions and improvements
              we&apos;ve made to FreshCart Next.js UI.
            </p>
          </div>
        </Col>
      </Row>

      <div id='v110'></div>
      <hr className="mb-10" />

      <Version_01_01_00 />

      <div id='v100'></div>
      <hr className="my-5" />
      <Version_01_00_00 />


    </DocsInnerLayout>
  );
};

export default Index;
