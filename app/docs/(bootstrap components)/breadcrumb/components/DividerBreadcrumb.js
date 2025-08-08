// import node module libraries
import Link from "next/link";
import { Row, Col, Breadcrumb, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data files
import { DividerBreadcrumbCode } from "data/code/BreadcrumbCode";

const DividerBreadcrumbs = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="dividers" className="mb-4">
          <h2>Dividers</h2>
          <p>
            Dividers are automatically added in CSS through
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before">
              <code> ::before </code>
            </Link>
            and
            <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/content">
              <code> content </code>
            </Link>
            . They can be changed by modifying a local CSS custom property
            <code> --bs-breadcrumb-divider </code>, or through the
            <code> $breadcrumb-divider </code>
            Sass variable — and
            <code> $breadcrumb-divider-flipped </code>
            for its RTL counterpart, if needed. We default to our Sass variable,
            which is set as a fallback to the custom property. This way, you get
            a global divider that you can override without recompiling CSS at
            any time.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey={"design"}>
              <Breadcrumb as="nav">
                <Breadcrumb.Item href="">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="" active>
                  Library
                </Breadcrumb.Item>
              </Breadcrumb>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={DividerBreadcrumbCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default DividerBreadcrumbs;
