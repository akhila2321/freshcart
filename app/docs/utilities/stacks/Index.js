"use client";

// import node module libraries
import { Row, Col, Tab, Button, Form } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { StackOneCode, StackTwoCode } from "data/code/utilitiesCode/StacksCode";

const Index = () => {
  return (
    <DocsInnerLayout isOpen={false}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Stacks</h1>
            <p className="mb-0 lead text-muted">
              Shorthand helpers that build on top of our flexbox utilities to
              make component layout faster and easier than ever.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4">
            <h2>Vertical stack</h2>

            <p>
              Use
              <code> .vstack </code>
              to stack buttons and other elements:
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <div className="vstack gap-2 col-md-5 mx-auto">
                  <Button type="button" variant="secondary">
                    Save changes
                  </Button>
                  <Button type="button" variant="outline-secondary">
                    Cancel
                  </Button>
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={StackOneCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4">
            <h2>Horizontal stack</h2>
            <p>
              Create an inline form with
              <code> .hstack </code>:
            </p>
          </div>

          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <div className="hstack gap-3">
                <Form.Control
                  className="me-auto"
                  type="text"
                  placeholder="Add your item here..."
                />
                <Button type="button" variant="secondary">
                  Submit
                </Button>
                <div className="vr opacity-25"></div>
                <Button type="button" variant="outline-danger">
                  Reset
                </Button>
              </div>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={StackTwoCode} />
            </Tab.Pane>
          </CustomTab>
        </Col>
      </Row>
    </DocsInnerLayout>
  );
};

export default Index;
