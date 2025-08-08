// import node module libraries
import { Fragment, useState } from "react";
import { Row, Col, Tab, Toast, Image } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data files
import {
  ToastCenterCode,
  TopRightPlacementCode,
  TopRightPlacementCode2,
} from "data/code/ToastsCode";

const ToastPlacement = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);

  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="placement" className="mb-4">
            <h2>Placement</h2>
            <p>
              Place toasts with custom CSS as you need them. The top right is
              often used for notifications, as is the top middle. If you’re only
              ever going to show one toast at a time, put the positioning styles
              right on the
              <code className="highlighter-rouge"> .toast </code>.
            </p>
          </div>
          <div className="mb-6">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane
                title="Design"
                eventKey={"design"}
                className="bg-light p-4"
              >
                <div
                  style={{ minHeight: "200px" }}
                  className="position-relative"
                >
                  <Toast
                    show={isOpen}
                    className="position-absolute top-0 end-0 "
                    onClose={() => setIsOpen(false)}
                  >
                    <Toast.Header>
                      <Image
                        src="/images/avatar/avatar-1.jpg"
                        alt=""
                        className="rounded me-2 avatar-xs"
                      />
                      <strong className="me-auto">Bootstrap</strong>
                      <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>
                      Hello, world! This is a toast message.
                    </Toast.Body>
                  </Toast>
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={TopRightPlacementCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Top Right With Icon  */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4">
            <p>
              For systems that generate more notifications, consider using a
              wrapping element so they can easily stack.
            </p>
          </div>
          <div className="mb-6">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane
                title="Design"
                eventKey={"design"}
                className="bg-light p-4"
              >
                <div
                  className="position-relative"
                  style={{ minHeight: "200px" }}
                >
                  <div className="position-absolute top-0 end-0">
                    <Toast show={isOpen2} onClose={() => setIsOpen2(false)}>
                      <Toast.Header>
                        <Image
                          src="/images/docs/blackSquare.svg"
                          alt=""
                          className="rounded me-2"
                        />
                        <strong className="me-auto">Bootstrap</strong>
                        <small className="text-muted">just now</small>
                      </Toast.Header>
                      <Toast.Body>See? Just like this.</Toast.Body>
                    </Toast>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={TopRightPlacementCode2} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Toast Center  */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4">
            <p>
              You can also get fancy with flexbox utilities to align toasts
              horizontally and/or vertically.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane
                title="Design"
                eventKey={"design"}
                className="bg-light p-4"
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ minHeight: "200px" }}
                >
                  <Toast show={isOpen3} onClose={() => setIsOpen3(false)}>
                    <Toast.Header>
                      <Image
                        src="/images/docs/blackSquare.svg"
                        alt=""
                        className="rounded me-2"
                      />
                      <strong className="me-auto">Bootstrap</strong>
                      <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>
                      Hello, world! This is a toast message.
                    </Toast.Body>
                  </Toast>
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={ToastCenterCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ToastPlacement;
