// import node module libraries
import { useState } from "react";
import { Row, Col, Tab, Alert, Button } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { AlertLiveCode } from "data/code/AlertCode";

const LiveAlert = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="live-alert" className="mb-4">
          <h2>Live Alert</h2>
          <p>
            Click the button below to show an alert (hidden with inline styles
            to start), then dismiss (and destroy) it with the built-in close
            button.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey="design">
              <Alert
                variant="primary"
                dismissible
                id="liveAlert"
                show={isOpen}
                onClose={() => setIsOpen(false)}
              >
                <strong>Nice!</strong> You&apos;ve triggered this alert.
              </Alert>
              <Button
                variant="primary"
                id="liveAlertBtn"
                onClick={() => setIsOpen(true)}
              >
                Show live alert
              </Button>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey="code">
              <HighlightCode code={AlertLiveCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default LiveAlert;
