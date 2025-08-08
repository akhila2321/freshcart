// import node module libraries
import { useState } from "react";
import { Row, Col, Tab, Toast, Image } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { TranslucentToastCode } from "data/code/ToastsCode";

const TranslucentToasts = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="translucent" className="mb-4">
          <h2>Translucent</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <Toast show={isOpen} onClose={() => setIsOpen(false)}>
                <Toast.Header>
                  <Image
                    src="/images/docs/blackSquare.svg"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
              </Toast>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={TranslucentToastCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default TranslucentToasts;
