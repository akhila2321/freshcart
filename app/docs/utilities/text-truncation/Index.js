"use client";

// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { TextTruncationCode } from "data/code/utilitiesCode/TextTruncationCode";

const Index = () => {
  return (
    <DocsInnerLayout isOpen={false}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Text truncation</h1>
            <p className="mb-0 lead text-muted">
              Truncate long strings of text with an ellipsis.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4">
            <p>
              For longer content, you can add a<code>.text-truncate</code>
              class to truncate the text with an ellipsis.
              <strong>
                Requires
                <code>display: inline-block</code>
                or
                <code>display: block</code>.
              </strong>
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Row>
                  <Col xs={2} className="text-truncate">
                    This text is quite long, and will be truncated once
                    displayed.
                  </Col>
                </Row>
                <span
                  className="d-inline-block text-truncate"
                  style={{ maxWidth: "150px" }}
                >
                  This text is quite long, and will be truncated once displayed.
                </span>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={TextTruncationCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </DocsInnerLayout>
  );
};

export default Index;
