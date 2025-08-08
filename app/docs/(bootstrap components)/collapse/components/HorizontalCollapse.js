// import node module libraries
import { useState } from "react";
import { Row, Col, Collapse, Tab, Button, Card } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { HorizontalCollpaseCode } from "data/code/CollapseCode";

const HorizontalCollapse = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="horizontal" className="mb-4">
          <h2 className="mb-0">Horizontal</h2>
        </div>

        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              id="pills-horizontal-collapse-design"
            >
              <p>
                <Button
                  variant="primary"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-expanded={isOpen}
                  aria-controls="collapseWidthExample"
                >
                  Toggle width collapse
                </Button>
              </p>
              <div style={{ minHeight: "120px" }}>
                <Collapse
                  in={isOpen}
                  dimension={"width"}
                  id="collapseWidthExample"
                >
                  <div id="collapseWidthExample">
                    <Card
                      body
                      style={{ width: "300px" }}
                      className="border shadow-none"
                    >
                      This is some placeholder content for a horizontal
                      collapse. It&apos;s hidden by default and shown when
                      triggered.
                    </Card>
                  </div>
                </Collapse>
              </div>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={HorizontalCollpaseCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default HorizontalCollapse;
