// import node module libraries
import Link from "next/link";
import { Row, Col, Form, Modal, Button } from "react-bootstrap";

const RegisterViaPhoneModal = ({ isOpen, handleClose }) => {
  return (
    <Modal id="registerModal" centered show={isOpen} onHide={handleClose}>
      <Modal.Dialog centered bsPrefix="modal-content bg-light">
        <Modal.Header className="bg-white" closeButton>
          <Modal.Title id="exampleModalLabel" className="fs-5" as="h1">
            Register via Phone Number
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-center">
            <Col lg={8} xs={12}>
              <div className="py-6">
                <h4 className="fs-6 mb-4">
                  Enter your phone number to Signup or Register
                </h4>
                <Form>
                  <div className="input-phone mb-2">
                    <Form.Control
                      type="tel"
                      maxLength={10}
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      required
                    />
                  </div>
                  <div className="d-grid">
                    <Button type="submit" variant="primary">
                      Next
                    </Button>
                  </div>
                </Form>
                <div className="mt-4">
                  <small>
                    <Link href="#">Terms of Service</Link>
                    <Link href="#" className="ms-3">
                      Privacy Policy
                    </Link>
                  </small>
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
};

export default RegisterViaPhoneModal;
