"use client";

// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";
import Link from "next/link";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { ColoredLinksCode } from "data/code/utilitiesCode/ColoredLinksCode";

const Index = () => {
  return (
    <DocsInnerLayout isOpen={false}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold ">Colored links</h1>
            <p className="mb-0 lead text-muted">
              Colored links with hover states
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="links" className="mb-4">
            <p>
              You can use the <code>.link-*</code> classes to colorize links.
              Unlike the <code>.text-*</code> classes, these classes have a{" "}
              <code>:hover</code> and <code>:focus</code> state.
            </p>
          </div>
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey="design" id="pills-links-design">
              <div className="d-flex flex-column">
                <Link href="" className="link-primary">
                  Primary link
                </Link>
                <Link href="" className="link-secondary">
                  Secondary link
                </Link>
                <Link href="" className="link-success">
                  Success link
                </Link>
                <Link href="" className="link-danger">
                  Danger link
                </Link>
                <Link href="" className="link-warning">
                  Warning link
                </Link>
                <Link href="" className="link-info">
                  Info link
                </Link>
                <Link href="" className="link-light">
                  Light link
                </Link>
                <Link href="" className="link-dark">
                  Dark link
                </Link>
              </div>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey="code">
              <HighlightCode code={ColoredLinksCode} />
            </Tab.Pane>
          </CustomTab>
        </Col>
      </Row>
    </DocsInnerLayout>
  );
};

export default Index;
