// import node module libraries
import { useState } from "react";
import { Row, Col, Tab, Modal, Button } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { ToggleModalCode } from "data/code/ModalCode";

const ToggleModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const switchModalOne = () => {
    setIsOpen2(false);
    setIsOpen(true);
  };

  const switchModalTwo = () => {
    setIsOpen(false);
    setIsOpen2(true);
  };

  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="toggle-between-modals" className="mb-4">
          <h2>Toggle between modals</h2>
          <p>
            Toggle between multiple modals with some clever placement of the
            <code> data-bs-target </code>
            and
            <code> data-bs-toggle </code>
            attributes. For example, you could toggle a password reset modal
            from within an already open sign in modal.
            <strong>
              Please note multiple modals cannot be open at the same time
            </strong>
            —this method simply toggles between two separate modals.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              {/* Modal One */}
              <Modal
                show={isOpen}
                onHide={() => setIsOpen(false)}
                id="exampleModalToggle"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title as="h5">Modal 1</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Show a second modal and hide this one with the button below.
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={switchModalTwo}>
                    Open second modal
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* Modal Two */}
              {/* Modal One */}
              <Modal
                id="exampleModalToggle2"
                centered
                show={isOpen2}
                onHide={() => setIsOpen2(false)}
              >
                <Modal.Header closeButton>
                  <Modal.Title as="h5">Modal 2</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Hide this modal and show the first with the button below.
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={switchModalOne}>
                    Back to first
                  </Button>
                </Modal.Footer>
              </Modal>

              <Button variant="primary" onClick={() => setIsOpen(true)}>
                Open first modal
              </Button>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={ToggleModalCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default ToggleModal;
