// import node module libraries
import { useState } from "react";
import { Row, Col, Tab, Toast, Button } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { ColorToastCode } from "data/code/ToastsCode";

const ColorToast = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="color-scheme" className="mb-4">
          <h2 className="mb-0">Color schemes</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <Toast
                bg="primary"
                className="align-items-center text-white border-0"
                show={isOpen}
              >
                <div className="d-flex">
                  <Toast.Body>
                    Hello, world! This is a toast message.
                  </Toast.Body>
                  <Button
                    variant="close"
                    className="btn-close-white me-2 m-auto"
                    onClick={() => setIsOpen(false)}
                  ></Button>
                </div>
              </Toast>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={ColorToastCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default ColorToast;
