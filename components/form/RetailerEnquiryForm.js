// import node module libraries
import { Row, Col, Form, Button } from "react-bootstrap";

const RetailerEnquiryForm = () => {
  return (
    <Row className="my-10">
      <Col lg={{ offset: 1, span: 10 }} xs={12}>
        <div className="mb-8">
          <h1 className="h3">Retailer Inquiries</h1>
          <p className="lead mb-0">
            This form is for retailer inquiries only. For all other customer or
            shopper support requests, please visit the links below this form.
          </p>
        </div>

        {/* Form Start */}
        <Row as="form" className="needs-validation">
          <Col md={6} className="mb-3">
            <Form.Label htmlFor="fname">
              First Name
              <span className="text-danger"> *</span>
            </Form.Label>
            <Form.Control
              type="text"
              id="fname"
              name="fname"
              placeholder="Enter Your First Name"
            />
            <div className="invalid-feedback">Please enter firstname.</div>
          </Col>

          <Col md={6} className="mb-3">
            <Form.Label htmlFor="lname">
              Last Name
              <span className="text-danger"> *</span>
            </Form.Label>
            <Form.Control
              type="text"
              id="lname"
              name="lname"
              placeholder="Enter Your Last name"
            />
            <div className="invalid-feedback">Please enter lastname.</div>
          </Col>
          <Col md={12} className="mb-3">
            <Form.Label htmlFor="company">
              Company
              <span className="text-danger"> *</span>
            </Form.Label>
            <Form.Control
              type="text"
              id="company"
              name="company"
              placeholder="Your Company"
              required
            />
            <div className="invalid-feedback">Please enter company.</div>
          </Col>

          <Col md={12} className="mb-3">
            <Form.Label htmlFor="title">
              Title
              <span className="text-danger"> *</span>
            </Form.Label>
            <Form.Control
              type="text"
              id="title"
              name="title"
              placeholder="Your Title"
              required
            />
            <div className="invalid-feedback">Please enter title.</div>
          </Col>

          <Col md={6} className="mb-3">
            <Form.Label htmlFor="emailContact">
              Email
              <span className="text-danger"> *</span>
            </Form.Label>
            <Form.Control
              type="email"
              id="emailContact"
              name="emailContact"
              placeholder="Enter Your First Name"
              required
            />
            <div className="invalid-feedback">Please enter email.</div>
          </Col>

          <Col md={6} className="mb-3">
            <Form.Label htmlFor="phone">Phone</Form.Label>
            <Form.Control
              type="email"
              id="phone"
              name="phone"
              placeholder="Your Phone Number"
              required
            />
            <div className="invalid-feedback">Please enter phone.</div>
          </Col>

          <Col md={12} className="mb-3">
            <Form.Label htmlFor="validationTextarea">Comments</Form.Label>
            <Form.Control
              type="email"
              as="textarea"
              id="validationTextarea"
              name="validationTextarea"
              rows={4}
              required
            />
            <div className="invalid-feedback">
              Please enter a message in the textarea.
            </div>
          </Col>
          <Col md={12}>
            <Button type="primary">Submit</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default RetailerEnquiryForm;
