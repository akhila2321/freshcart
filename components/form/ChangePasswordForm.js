// import node module libraries
import { Row, Col, Form, Button } from "react-bootstrap";
import Link from "next/link";

const ChangePasswordForm = () => {
  return (
    <div className="pe-lg-14">
      <h5 className="mb-4">Password</h5>
      <Row xs={1} lg={2}>
        <Form>
          <Col className="mb-3">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" placeholder="**********" />
          </Col>

          <Col className="mb-3">
            <Form.Label>Current Password</Form.Label>
            <Form.Control type="password" placeholder="**********" />
          </Col>

          <Col xs={12}>
            <p className="mb-4">
              Can’t remember your current password?
              <Link href="#"> Reset your password.</Link>
            </p>
            <Button href="#" variant="primary">
              Save Password
            </Button>
          </Col>
        </Form>
      </Row>
    </div>
  );
};

export default ChangePasswordForm;
