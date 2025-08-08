// import node module libraries
import { Col, Card } from "react-bootstrap";

const CustomerDetails = () => {
  return (
    <Col lg={4}>
      <Card className="border-0 shadow">
        <Card.Body className="p-6 d-flex flex-column gap-6">
          <div>
            <h4 className="mb-0 h6">Customer Details</h4>
          </div>
          <div className="d-flex flex-column gap-3">
            <div className="d-flex flex-row justify-content-between">
              <span className="fw-medium text-dark">Created at</span>
              <span className="fw-medium">8 month ago</span>
            </div>
            <div className="d-flex flex-row justify-content-between">
              <span className="fw-medium text-dark">Last modified at</span>
              <span className="fw-medium">2 month ago</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CustomerDetails;
