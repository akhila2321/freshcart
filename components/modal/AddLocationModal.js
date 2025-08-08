// import node module libraries
import { Form, InputGroup, Modal, Image, Button } from "react-bootstrap";
import { Search } from "react-feather";

const AddLocationModal = ({ show, close }) => {
  return (
    <Modal id="locationSecondModal" centered show={show}>
      <Modal.Dialog centered bsPrefix="modal-center">
        <Modal.Body>
          <div className="mb-5 d-flex align-items-center justify-content-between">
            <Modal.Title as="h1" className="fs-5" id="locationSecondModalLabel">
              Add Your Location
            </Modal.Title>
            <Button variant="close" onClick={() => close()} />
          </div>
          <div className="w-100">
            <Form>
              <InputGroup>
                <Form.Control
                  type="text"
                  className="w-45"
                  placeholder="Search for area, location more.."
                />
                <InputGroup.Text className="bg-transparent">
                  <Search size={16} />
                </InputGroup.Text>
              </InputGroup>
            </Form>
          </div>
          <div className="my-10 text-center">
            <Image
              src="/images/svg-graphics/delivery-boy.svg"
              alt=""
              className="img-fluid"
            />
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
};

export default AddLocationModal;
