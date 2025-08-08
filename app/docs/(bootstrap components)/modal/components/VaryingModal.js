// import node module libraries
import { useState } from "react";
import Link from "next/link";
import { Row, Col, Tab, Modal, Button, Form } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { VaryingModalCode } from "data/code/ModalCode";

const VaryingModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isValidate, setIsValidate] = useState(false);
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="varying-modal-content" className="mb-4">
          <h2>Varying modal content</h2>
          <p>
            Have a bunch of buttons that all trigger the same modal with
            slightly different contents? Use
            <code> event.relatedTarget </code>
            and
            <Link href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes">
              HTML
              <code> data-bs-* </code>
              attributes
            </Link>
            to vary the contents of the modal depending on which button was
            clicked.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <Button
                variant="primary"
                className="mb-1 me-1"
                onClick={() => setIsOpen(true)}
              >
                Open modal for @mdo
              </Button>
              <Button
                variant="primary"
                className="mb-1 me-1"
                onClick={() => setIsOpen(true)}
              >
                Open modal for @fat
              </Button>
              <Button
                variant="primary"
                className="mb-1"
                onClick={() => setIsOpen(true)}
              >
                Open modal for @getbootstrap
              </Button>

              {/* Modal One */}
              <Modal
                id="exampleModal"
                show={isOpen}
                onHide={() => setIsOpen(false)}
              >
                <Modal.Header closeButton>
                  <Modal.Title as="h5" id="exampleModalLabelOne">
                    New message
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form className="needs-validation" validated={isValidate}>
                    <div className="mb-3">
                      <Form.Label htmlFor="recipient-name">
                        Recipient:
                      </Form.Label>
                      <Form.Control type="text" id="recipient-name" required />
                      <div className="invalid-feedback">
                        Please provide a valid city.
                      </div>
                    </div>
                    <div className="mb-3">
                      <Form.Label htmlFor="message-text">Message:</Form.Label>
                      <Form.Control
                        type="text"
                        id="message-text"
                        as="textarea"
                        rows={"4"}
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter a message in the textarea.
                      </div>
                    </div>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={() => setIsOpen(false)}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={() => setIsValidate(true)}>
                    Send message
                  </Button>
                </Modal.Footer>
              </Modal>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={VaryingModalCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default VaryingModal;
