"use client";

// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { RatioCode } from "data/code/utilitiesCode/RatioCode";

const Index = () => {
  return (
    <DocsInnerLayout isOpen={false}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Ratios</h1>
            <p className="mb-0 lead text-muted">
              Use generated pseudo elements to make an element maintain the
              aspect ratio of your choosing. Perfect for responsively handling
              video or slideshow embeds based on the width of the parent.
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4">
            <h2>Aspect ratios</h2>

            <p>
              Aspect ratios can be customized with modifier classes. By default
              the following ratio classes are provided:
            </p>
          </div>

          <div>
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <div className="ratio ratio-1x1 me-1">
                  <div className="d-flex align-items-center justify-content-center">
                    1x1
                  </div>
                </div>
                <div className="ratio ratio-4x3 me-1">
                  <div className="d-flex align-items-center justify-content-center">
                    4x3
                  </div>
                </div>
                <div className="ratio ratio-16x9 me-1">
                  <div className="d-flex align-items-center justify-content-center">
                    16x9
                  </div>
                </div>
                <div className="ratio ratio-21x9 me-1">
                  <div className="d-flex align-items-center justify-content-center">
                    21x9
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={RatioCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </DocsInnerLayout>
  );
};

export default Index;
