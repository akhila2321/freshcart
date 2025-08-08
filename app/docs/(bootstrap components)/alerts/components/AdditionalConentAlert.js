"use client";

// import node module libraries
import { Row, Col, Tab, Alert } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data files
import { AdditionAlertCode } from "data/code/AlertCode";

const AdditionalConentAlert = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="additional-content" className="mb-4">
          <h2>Additional content</h2>
          <p>
            Alerts can also contain additional HTML elements like headings,
            paragraphs and dividers.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <Alert variant="success">
                <Alert.Heading as={"h4"}>Well done!</Alert.Heading>
                <p>
                  Aww yeah, you successfully read this important alert message.
                  This example text is going to run a bit longer so that you can
                  see how spacing within an alert works with this kind of
                  content.
                </p>
                <hr />
                <p className="mb-0">
                  Whenever you need to, be sure to use margin utilities to keep
                  things nice and tidy.
                </p>
              </Alert>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={AdditionAlertCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default AdditionalConentAlert;
