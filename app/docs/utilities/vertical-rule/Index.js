"use client";

// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import required custom components
import { HighlightCode } from "components/common/HighlightCode";
import CustomTab from "components/common/CustomTab";

// import required data file
import {
  VerticalRuleOneCode,
  VerticalRuleThreeCode,
  VerticalRuleTwoCode,
} from "data/code/utilitiesCode/VerticalRuleCode";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

const Index = () => {
  return (
    <DocsInnerLayout isOpen={false}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Vertical rule</h1>
            <p className="mb-0 lead text-muted">
              Easily change the vertical alignment of inline, inline-block,
              inline-table, and table cell elements.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4">
            <h2>Example</h2>

            <p>
              Use
              <code> .vstack </code>
              to stack buttons and other elements:
            </p>
          </div>
          <div className="mb-6">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <div className="vr opacity-25"></div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={VerticalRuleOneCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4">
            <p>Vertical rules scale their height in flex layouts:</p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <div className="d-flex" style={{ height: "200px" }}>
                  <div className="vr opacity-25"></div>
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={VerticalRuleTwoCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
      {/* Stack */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4">
            <h2>With stacks</h2>
            <p>They can also be used in stacks:</p>
          </div>
          <div>
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <div className="hstack gap-3">
                  <div className="bg-light border">First item</div>
                  <div className="bg-light border ms-auto">Second item</div>
                  <div className="vr opacity-25"></div>
                  <div className="bg-light border">Third item</div>
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={VerticalRuleThreeCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </DocsInnerLayout>
  );
};

export default Index;
