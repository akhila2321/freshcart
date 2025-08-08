"use client";

// import node module libraries
import Link from "next/link";
import { Row, Col, Tab } from "react-bootstrap";

// import custom components
import DocsInnerLayout from "layout/DocsInnerLayout";
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
  TextColorCode,
  TextColorOpacityCode,
} from "data/code/utilitiesCode/TextColorCode";
import { TextColorLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={TextColorLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-2 display-3 fw-bold">Text Colors</h1>
            <p className="lead mb-0 text-muted">
              Convey meaning through
              <code>color</code>
              with a handful of color utility classes. Includes support for
              styling links with hover states, too.
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="text-color" className="mb-4">
            <h2>Colors</h2>
            <p>
              Colorize text with color utilities. If you want to colorize links,
              you can use the
              <Link href="#">
                <code>.link-*</code>
                helper classes
              </Link>
              which have
              <code>:hover</code>
              and
              <code>:focus</code>
              states.
            </p>
          </div>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <p className="text-primary">.text-primary</p>
                <p className="text-secondary">.text-secondary</p>
                <p className="text-success">.text-success</p>
                <p className="text-danger">.text-danger</p>
                <p className="text-warning">.text-warning</p>
                <p className="text-info">.text-info</p>
                <p className="text-light bg-dark">.text-light</p>
                <p className="text-dark">.text-dark</p>
                <p className="text-body">.text-body</p>
                <p className="text-muted">.text-muted</p>
                <p className="text-white bg-dark">.text-white</p>
                <p className="text-black-50">.text-black-50</p>
                <p className="text-white-50 bg-dark">.text-white-50</p>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={TextColorCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Opacity */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="opacity" className="mb-4">
            <h2>Opacity</h2>
            <p>
              As of v5.1.0, text color utilities are generated with Sass using
              CSS variables. This allows for real-time color changes without
              compilation and dynamic alpha transparency changes.
            </p>
          </div>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <div className="text-primary">This is default primary text</div>
                <div className="text-primary text-opacity-75">
                  This is 75% opacity primary text
                </div>
                <div className="text-primary text-opacity-50">
                  This is 50% opacity primary text
                </div>
                <div className="text-primary text-opacity-25">
                  This is 25% opacity primary text
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={TextColorOpacityCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </DocsInnerLayout>
  );
};

export default Index;
