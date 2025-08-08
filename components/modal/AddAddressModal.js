// import node module libraries
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const AddAddressModal = ({ isAddressOpen, addressClose }) => {
  return (
    <Modal
      id="addAddressModal"
      centered
      show={isAddressOpen}
      onHide={addressClose}
    >
      <Modal.Dialog centered bsPrefix="modal-contnet">
        <Modal.Body className="p-6">
          <div className="d-flex justify-content-between mb-5">
            <div>
              <h5 className="mb-1" id="addAddressModalLabel">
                New Shipping Address
              </h5>
              <p className="small mb-0">
                Add new shipping address for your order delivery.
              </p>
            </div>
            <div>
              <Button
                type="button"
                bsPrefix="btn-close"
                onClick={() => addressClose()}
              />
            </div>
          </div>

          {/* Address Form */}
          <Row className="g-3">
            <Col xs={12}>
              <Form.Control type="text" placeholder="First name" required />
            </Col>
            <Col xs={12}>
              <Form.Control type="text" placeholder="Last name" required />
            </Col>
            <Col xs={12}>
              <Form.Control type="text" placeholder="Address Line 1" required />
            </Col>
            <Col xs={12}>
              <Form.Control type="text" placeholder="Address Line 2" required />
            </Col>
            <Col xs={12}>
              <Form.Control type="text" placeholder="City" required />
            </Col>
            <Col xs={12}>
              <Form.Select>
                <option defaultValue={"India"}>India</option>
                <option value="1">UK</option>
                <option value="2">USA</option>
                <option value="3">UAE</option>
              </Form.Select>
            </Col>
            <Col xs={12}>
              <Form.Select>
                <option defaultValue="Gujarat">Gujarat</option>
                <option value="1">Northern Ireland</option>
                <option value="2">Alaska</option>
                <option value="3">Abu Dhabi</option>
              </Form.Select>
            </Col>
            <Col xs={12}>
              <Form.Control type="text" placeholder="Zip Code" />
            </Col>
            <Col xs={12}>
              <Form.Control type="text" placeholder="Business Name" />
            </Col>
            <Col xs={12}>
              <Form.Check>
                <Form.Check.Input type="checkbox" id="flexCheckDefault" />
                <Form.Check.Label htmlFor="flexCheckDefault">
                  Set as Default
                </Form.Check.Label>
              </Form.Check>
            </Col>
            <Col xs={12} className="text-end">
              <Button
                variant="outline-primary"
                className="me-1"
                onClick={() => addressClose()}
              >
                Cancel
              </Button>
              <Button variant="primary">Save Address</Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
};

export default AddAddressModal;
