// import node module libraries
import { Form, Button } from "react-bootstrap";

// import custom components
import FreshBadge from "components/common/FreshBadge";

const OrderSingleHeader = () => {
  return (
    <div className="d-md-flex justify-content-between">
      <div className="d-flex align-items-center mb-2 mb-md-0">
        <h2 className="mb-0">Order ID: #FC001</h2>
        <FreshBadge
          content="Pending"
          bg="light-warning"
          text="dark-warning"
          className={"ms-2"}
        />
      </div>
      <div className="d-md-flex">
        <div className="mb-2 mb-md-0">
          <Form.Select onChange={() => { }}>
            <option value>Status</option>
            <option value="Success">Success</option>
            <option value="Pending">Pending</option>
            <option value="Cancel">Cancel</option>
          </Form.Select>
        </div>

        <div className="ms-md-3">
          <Button variant="primary" className="me-1">
            Save
          </Button>
          <Button variant="secondary">Download Invoice</Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSingleHeader;
