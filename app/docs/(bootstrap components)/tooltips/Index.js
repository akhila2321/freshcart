"use client";

// import node module libraries
import {
  Row,
  Col,
  OverlayTrigger,
  Button,
  Tooltip,
  Tab,
} from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import required data file
import { TooltipsCode } from "data/code/TooltipsCode";
import { tooltipsLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={tooltipsLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-2 display-3 fw-bold">Tooltips</h1>
            <p className="mb-0 lead text-muted">
              Documentation and examples for adding custom Bootstrap tooltips
              with CSS and JavaScript using CSS3 for animations and
              data-attributes for local title storage.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="tooltips" className="mb-4">
            <h2 className="fw-semibold">Examples</h2>
            <p>
              Hover over the buttons below to see the four tooltips directions:
              top, right, bottom, and left.
            </p>
          </div>
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              {["top", "right", "bottom", "left"].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      Tooltip on <strong>{placement}</strong>.
                    </Tooltip>
                  }
                >
                  <Button variant="secondary" className="me-1 mb-2">
                    Tooltip on {placement}
                  </Button>
                </OverlayTrigger>
              ))}
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={TooltipsCode} />
            </Tab.Pane>
          </CustomTab>
        </Col>
      </Row>
    </DocsInnerLayout>
  );
};

export default Index;
