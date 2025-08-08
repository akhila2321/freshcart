"use client";

// import node module libraries
import { Row, Col, Tab, Image } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
  AdditiveBorderedCode,
  BorderColorCode,
  BorderRadiusCode,
  BorderSizeCode,
  SubtractiveBorderCode,
} from "data/code/utilitiesCode/BorderedCode";
import { BorderLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={BorderLinks}>
      {/* Additive */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Borders</h1>
            <p className="mb-0 lead text-muted">
              Use border utilities to quickly style the border and border-radius
              of an element. Great for images, buttons, or any other element.
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="border" className="mb-4">
            <div className="mt-4 mb-4" id="additive">
              <h3 className="fw-semibold mb-1">Additive</h3>
            </div>
          </div>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <div className="docs-example-border-utils">
                  <span className="border"></span>
                  <span className="border-top"></span>
                  <span className="border-end"></span>
                  <span className="border-bottom"></span>
                  <span className="border-start"></span>
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={AdditiveBorderedCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Subtractive */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="subtractive" className="mb-4">
            <h3 className="fw-semibold mb-1">Subtractive</h3>
          </div>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <div className="docs-example-border-utils docs-example-border-utils-0">
                  <span className="border-0"></span>
                  <span className="border-top-0"></span>
                  <span className="border-end-0"></span>
                  <span className="border-bottom-0"></span>
                  <span className="border-start-0"></span>
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={SubtractiveBorderCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Border Color */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="border-color" className="mb-4">
            <h2>Border color</h2>
            <p>
              Change the border color using utilities built on our theme colors.
            </p>
          </div>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <div className="docs-example-border-utils">
                  <span className="border border-primary"></span>
                  <span className="border border-secondary"></span>
                  <span className="border border-success"></span>
                  <span className="border border-danger"></span>
                  <span className="border border-warning"></span>
                  <span className="border border-info"></span>
                  <span className="border border-light"></span>
                  <span className="border border-dark"></span>
                  <span className="border border-white"></span>
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={BorderColorCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Border Radius */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="border-radius" className="mb-4">
            <h2>Border radius</h2>
            <p>Add classes to an element to easily round its corners.</p>
          </div>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Image
                  src="/images/docs/placeholder-img.jpg"
                  alt="..."
                  className="rounded me-1"
                />
                <Image
                  src="/images/docs/placeholder-img.jpg"
                  alt=""
                  className="rounded-top me-1"
                />
                <Image
                  src="/images/docs/placeholder-img.jpg"
                  alt=""
                  className="rounded-end me-1"
                />
                <Image
                  src="/images/docs/placeholder-img.jpg"
                  alt=""
                  className="rounded-bottom me-1"
                />
                <Image
                  src="/images/docs/placeholder-img.jpg"
                  alt=""
                  className="rounded-start me-1"
                />
                <Image
                  src="/images/docs/placeholder-img.jpg"
                  alt=""
                  className="rounded-circle me-1"
                />
                <Image
                  src="/images/docs/placeholder-img.jpg"
                  alt=""
                  className="rounded-pill me-1"
                />
                <Image
                  src="/images/docs/placeholder-img.jpg"
                  alt=""
                  className="rounded-0 me-1"
                />
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={BorderRadiusCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Border Size */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="sizes" className="mb-4">
            <h2>Sizes</h2>
            <p>
              Use
              <code className="highlighter-rouge">.</code>
              or
              <code className="highlighter-rouge"> .rounded-0 </code>
              for larger or smaller border-radius.
            </p>
          </div>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Image
                  src="/images/docs/placeholder-img.jpg"
                  alt=""
                  className="rounded-0"
                />
                <Image src="/images/docs/placeholder-img.jpg" alt="" />
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={BorderSizeCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </DocsInnerLayout>
  );
};

export default Index;
