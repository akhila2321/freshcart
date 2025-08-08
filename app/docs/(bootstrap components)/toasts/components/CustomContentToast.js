// import node module libraries
import { Fragment, useState } from "react";
import { Row, Col, Tab, Toast, Button } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data files
import {
  CustomContentToastCode,
  CustomContentToastCode2,
} from "data/code/ToastsCode";

const CustomContentToast = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="custom-content" className="mb-4">
            <h2>Custom content</h2>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane
                title="Design"
                eventKey={"design"}
                className="bg-light p-4"
              >
                <Toast show={isOpen}>
                  <div className="d-flex">
                    <Toast.Body>
                      Hello, world! This is a toast message.
                    </Toast.Body>
                    <Button
                      variant="close"
                      onClick={() => setIsOpen(false)}
                      className="me-2 m-auto"
                    ></Button>
                  </div>
                </Toast>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={CustomContentToastCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Custom Content 2 */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="custom-content-with-btn" className="mb-4">
            <p>
              Alternatively, you can also add additional controls and components
              to toasts.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane
                title="Design"
                eventKey={"design"}
                className="bg-light p-4"
              >
                <Toast show={isOpen2}>
                  <Toast.Body>
                    Hello, world! This is a toast message.
                    <div className="mt-2 pt-2 border-top">
                      <Button variant="primary" size="sm">
                        Take action
                      </Button>{" "}
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setIsOpen2(false)}
                      >
                        Close
                      </Button>
                    </div>
                  </Toast.Body>
                </Toast>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={CustomContentToastCode2} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default CustomContentToast;
