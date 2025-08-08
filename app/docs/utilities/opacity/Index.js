"use client";

import { Row, Col, Tab } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import custom components
import { HighlightCode } from "components/common/HighlightCode";
import CustomTab from "components/common/CustomTab";

// import required data file
import { OpacityCode } from "data/code/utilitiesCode/OpacityCode";

const Index = () => {
  return (
    <DocsInnerLayout isOpen={false}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Opacity</h1>
            <p className="mb-0 lead text-muted">
              Control the opacity of elements.
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="links" className="mb-4">
            <p>
              The
              <code> opacity </code>
              property sets the opacity level for an element. The opacity level
              describes the transparency level, where
              <code> 1 </code>
              is not transparent at all,
              <code> .5 </code>
              is 50% visible, and
              <code> 0 </code>
              is completely transparent.
            </p>
          </div>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <div className="d-sm-flex">
                  <div className="opacity-100 p-3 m-2 bg-primary text-light fw-bold rounded">
                    100%
                  </div>
                  <div className="opacity-75 p-3 m-2 bg-primary text-light fw-bold rounded">
                    75%
                  </div>
                  <div className="opacity-50 p-3 m-2 bg-primary text-light fw-bold rounded">
                    50%
                  </div>
                  <div className="opacity-25 p-3 m-2 bg-primary text-light fw-bold rounded">
                    25%
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={OpacityCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </DocsInnerLayout>
  );
};

export default Index;
