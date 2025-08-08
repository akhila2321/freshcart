// import node module libraries
import { useState } from "react";
import { Row, Col, Tab, Modal, Button } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { LiveDemoModalCode } from "data/code/ModalCode";

const LiveDemoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="live-demo" className="mb-4">
          <h2>Live Demo</h2>
          <p>
            Toggle a working modal demo by clicking the button below. It will
            slide down and fade in from the top of the page.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <Button variant="primary" onClick={() => setIsOpen(true)}>
                Launch demo modal
              </Button>
              <Modal
                id="exampleModal-2"
                show={isOpen}
                onHide={() => setIsOpen(false)}
              >
                <Modal.Dialog bsPrefix="modal-content">
                  <Modal.Header closeButton>
                    <Modal.Title id="exampleModalLabel">
                      Modal title
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>...</Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => setIsOpen(false)}
                    >
                      Close
                    </Button>
                    <Button variant="primary">Save changes</Button>
                  </Modal.Footer>
                </Modal.Dialog>
              </Modal>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={LiveDemoModalCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default LiveDemoModal;
