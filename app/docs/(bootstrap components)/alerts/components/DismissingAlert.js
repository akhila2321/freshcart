"use client";

// import node module libraries
import { useState } from "react";
import { Row, Col, Tab, Alert } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data files
import { DismissingAlertCode } from "data/code/AlertCode";

const DismissingAlert = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="dismissing" className="mb-4">
          <h2>Dismissing</h2>
          <p>
            Using the alert JavaScript plugin, it’s possible to dismiss any
            alert inline. Here’s how:
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <Alert
                variant="warning"
                dismissible
                show={isOpen}
                onClose={() => setIsOpen(false)}
              >
                <strong>Holy guacamole! </strong>
                You should check in on some of those fields below.
              </Alert>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={DismissingAlertCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default DismissingAlert;
