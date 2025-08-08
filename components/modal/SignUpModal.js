// import node module libraries
import { Form, Modal, Button } from "react-bootstrap";
import Link from "next/link";

export const SignUpModal = ({ isSignUpOpen, signUpClose }) => {
  return (
    <Modal id="userModal" centered show={isSignUpOpen} onHide={signUpClose}>
      <Modal.Dialog centered bsPrefix="modal-content" className="p-4">
        <Modal.Header className="border-0" closeButton>
          <Modal.Title className="fs-3 fw-bold" id="userModalLabel" as="h5">
            Sign Up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="needs-validation">
            <div className="mb-3">
              <Form.Label htmlFor="fullName">Name</Form.Label>
              <Form.Control
                type="text"
                id="fullName"
                placeholder="Enter Your Name"
                required
              />
              <div className="invalid-feedback">Please enter name.</div>
            </div>

            <div className="mb-3">
              <Form.Label htmlFor="email">Email address</Form.Label>
              <Form.Control
                type="email"
                id="email"
                placeholder="Enter Email address"
                required
              />
              <div className="invalid-feedback">Please enter email.</div>
            </div>

            <div className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                placeholder="Enter Password"
                required
              />
              <div className="invalid-feedback">Please enter password.</div>
              <Form.Text>
                By Signup, you agree to our
                <Link href="#!"> Terms of Service</Link> &
                <Link href="#!"> Privacy Policy</Link>
              </Form.Text>
            </div>

            <Button type="submit" className="btn btn-primary">
              Sign Up
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer className="border-0 justify-content-center">
          Already have an account?
          <Link href="/signin">Sign in</Link>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
};
