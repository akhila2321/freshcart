// import node module libraries
import { useState } from "react";
import { Row, Col, Tab, Button, Modal } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { VerticalCenterModalCode } from "data/code/ModalCode";

const VerticallyCenteredModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="vertically-centered" className="mb-4">
          <h2>Vertically centered</h2>
          <p>
            Add
            <code className="highlighter-rouge"> .modal-dialog-centered </code>
            to
            <code className="highlighter-rouge"> .modal-dialog </code>
            to vertically center the modal.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <Button variant="primary" onClick={() => setIsOpen(true)}>
                Launch demo modal
              </Button>
              <Modal
                show={isOpen}
                onHide={() => setIsOpen(false)}
                id="exampleModalCenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="exampleModalCenterTitle">
                    Modal title
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>...</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setIsOpen(false)}>
                    Close
                  </Button>
                  <Button variant="primary">Save changes</Button>
                </Modal.Footer>
              </Modal>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={VerticalCenterModalCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default VerticallyCenteredModal;
