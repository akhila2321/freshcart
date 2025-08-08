"use client";

// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
  BackgroundColorCode,
  OpacityBackgroundCode,
} from "data/code/utilitiesCode/BackgroundCode";
import { backgroundLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={backgroundLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-2 display-3 fw-bold">Background</h1>
            <p className="lead mb-0 text-muted">
              Convey meaning through
              <code> background-color </code>
              and add decoration with gradients.
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="background-color" className="mb-4">
            <h2>Background color</h2>
            <p>
              Similar to the contextual text color classes, easily set the
              background of an element to any contextual class. Anchor
              components will darken on hover, just like the text classes.
              Background utilities
              <strong>
                do not set
                <code className="highlighter-rouge"> color </code>
              </strong>
              , so in some cases you’ll want to use
              <code className="highlighter-rouge"> .text-* </code>
              utilities.
            </p>
          </div>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <div className="p-3 mb-2 bg-primary text-white">
                  .bg-primary
                </div>
                <div className="p-3 mb-2 bg-secondary text-white">
                  .bg-secondary
                </div>
                <div className="p-3 mb-2 bg-success text-white">
                  .bg-success
                </div>
                <div className="p-3 mb-2 bg-danger text-white">.bg-danger</div>
                <div className="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
                <div className="p-3 mb-2 bg-info text-white">.bg-info</div>
                <div className="p-3 mb-2 bg-light text-dark">.bg-light</div>
                <div className="p-3 mb-2 bg-dark text-white">.bg-dark</div>
                <div className="p-3 mb-2 bg-white text-dark">.bg-white</div>
                <div className="p-3 mb-2 bg-transparent text-dark">
                  .bg-transparent
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={BackgroundColorCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Opacity */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="opacity" className="mb-4">
            <h2 className="fw-semibold mb-1">Opacity</h2>
            <p>
              As of v5.1.0,
              <code> background-color </code>
              utilities are generated with Sass using CSS variables. This allows
              for real-time color changes without compilation and dynamic alpha
              transparency changes.
            </p>
          </div>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <div className="bg-success p-2 text-white">
                  This is default success background
                </div>
                <div className="bg-success p-2 text-white bg-opacity-75">
                  This is 75% opacity success background
                </div>
                <div className="bg-success p-2 text-dark bg-opacity-50">
                  This is 50% opacity success background
                </div>
                <div className="bg-success p-2 text-dark bg-opacity-25">
                  This is 25% opacity success background
                </div>
                <div className="bg-success p-2 text-dark bg-opacity-10">
                  This is 10% opacity success background
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={OpacityBackgroundCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </DocsInnerLayout>
  );
};

export default Index;
