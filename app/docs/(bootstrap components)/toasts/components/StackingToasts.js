// import node module libraries
import { useState } from "react";
import { Row, Col, Tab, Toast, Image } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { StackingToastsCode } from "data/code/ToastsCode";

const StackingToasts = () => {
  const [toastOne, setToastOne] = useState(true);
  const [toastTwo, setToastTwo] = useState(true);

  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="stacking" className="mb-4">
          <h2>Stacking</h2>
          <p>
            When you have multiple toasts, we default to vertically stacking
            them in a readable manner.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <Toast show={toastOne} onClose={() => setToastOne(false)}>
                <Toast.Header>
                  <Image
                    src="/images/docs/blackSquare.svg"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Bootstrap</strong>
                  <small>just now</small>
                </Toast.Header>
                <Toast.Body>See? Just like this.</Toast.Body>
              </Toast>
              <Toast
                show={toastTwo}
                onClose={() => setToastTwo(false)}
                className="mt-2"
              >
                <Toast.Header>
                  <Image
                    src="/images/docs/blackSquare.svg"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Bootstrap</strong>
                  <small>2 seconds ago</small>
                </Toast.Header>
                <Toast.Body>See? Just like this.</Toast.Body>
              </Toast>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={StackingToastsCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default StackingToasts;
