// import node module libraries
import { Fragment } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const AccountDetailsForm = () => {
  return (
    <Fragment>
      <div className="mb-6">
        <h2 className="mb-0">Account Setting</h2>
      </div>
      <div>
        <h5 className="mb-4">Account details</h5>
        <Row>
          <Col lg={5}>
            <Form method="post">
              <div className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="jitu chauhan" />
              </div>
              <div className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="example@gmail.com" />
              </div>
              <div className="mb-5">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Phone number" />
              </div>
              <div className="mb-3">
                <Button variant="primary">Save Details</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};

export default AccountDetailsForm;
