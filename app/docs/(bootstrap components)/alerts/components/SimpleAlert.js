// import node module libraries
import { Row, Col, Alert, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data files
import { AlertCode } from "data/code/AlertCode";

const SimpleAlert = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="simple-alert" className="mb-4">
          <h2>Simple Alert</h2>
          <p>
            Alerts are available for any length of text, as well as an optional
            dismiss button. For proper styling, use one of the eight
            <strong> required </strong>
            contextual classes (e.g.,
            <code> .alert-success</code>
            ).
          </p>
        </div>

        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey={"design"}>
              <Alert variant="primary">
                This is a primary alert—check it out!
              </Alert>
              <Alert variant="secondary">
                This is a secondary alert—check it out!
              </Alert>
              <Alert variant="success">
                This is a success alert—check it out!
              </Alert>
              <Alert variant="danger">
                This is a danger alert—check it out!
              </Alert>
              <Alert variant="warning">
                This is a warning alert—check it out!
              </Alert>
              <Alert variant="info">This is a info alert—check it out!</Alert>
              <Alert variant="light">This is a light alert—check it out!</Alert>
              <Alert variant="dark">This is a light alert—check it out!</Alert>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={AlertCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default SimpleAlert;
