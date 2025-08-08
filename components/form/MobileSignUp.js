// import node module libraries
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Link from "next/link";

const MobileSignUp = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={8} xs={12}>
          <div className="py-6">
            <h4 className="fs-6 mb-4">
              Enter your phone number to Signup or Register
            </h4>
            <Form className="needs-validation">
              <div className="input-phone mb-2">
                <Form.Control
                  type="tel"
                  maxLength={10}
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
                <div className="invalid-feedback">
                  Please enter phone number.
                </div>
              </div>
              <div className="d-grid">
                <Button variant="primary">Next</Button>
              </div>
            </Form>
          </div>
          <div className="mt-4">
            <small>
              <Link href="#">Terms of Service</Link>
              <Link href="#" className="ms-3">
                Privacy Policy
              </Link>
            </small>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MobileSignUp;
