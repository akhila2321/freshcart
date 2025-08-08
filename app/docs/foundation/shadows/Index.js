"use client";

// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import { ShadowsCode } from "data/code/foundationCode/ShadowsCode";

const Index = () => {
  return (
    <DocsInnerLayout isOpen={false}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-7">
            <h1 className="mb-2 display-3 fw-bold">Shadows</h1>
            <p className="mb-0 lead text-muted">
              Add or remove shadows to elements with box-shadow utilities.
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4">
            <h2>Example</h2>
            <p className="mb-0">
              While shadows on components are disabled by default in Bootstrap
              and can be enabled via
              <code> $enable-shadows </code>, you can also quickly add or remove
              a shadow with our
              <code> box-shadow </code>
              utility classes. Includes support for
              <code> .shadow-none </code>
              and three default sizes (which have associated variables to
              match).
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <div className="shadow-none p-3 mb-5 bg-light rounded">
                  No shadow
                </div>
                <div className="shadow-sm p-3 mb-5 bg-white rounded">
                  Small shadow
                </div>
                <div className="shadow p-3 mb-5 bg-white rounded">
                  Regular shadow
                </div>
                <div className="shadow-lg p-3 mb-5 bg-white rounded">
                  Larger shadow
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={ShadowsCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </DocsInnerLayout>
  );
};

export default Index;
