// import node moduel libraries
import { Card, Form, Row, Col } from "react-bootstrap";
import { Calendar } from "react-bootstrap-icons";
import Flatpickr from "react-flatpickr";
import monthSelectPlugin from "flatpickr/dist/plugins/monthSelect";
import "flatpickr/dist/plugins/monthSelect/style.css";

const PaymentMethodForm = () => {
  return (
    <div className="mt-5">
      <Card border className="shadow-none mb-2">
        <Card.Body className="p-6">
          <div className="d-flex">
            <Form.Check>
              <Form.Check.Input
                type="radio"
                name="flexRadioDefault"
                id="paypal"
              />
              <Form.Check.Label
                className="ms-2"
                htmlFor="paypal"
              ></Form.Check.Label>
            </Form.Check>
            <div>
              <h5 className="mb-1 h6">Payment with Paypal</h5>
              <p className="mb-0 small">
                You will be redirected to PayPal website to complete your
                purchase securely.
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>

      <Card border className="shadow-none mb-2">
        <Card.Body className="p-6">
          <div className="d-flex mb-4">
            <Form.Check>
              <Form.Check.Input type="radio" name="flexRadioDefault" id="paypal" />
              <Form.Check.Label className="ms-2" htmlFor="paypal"  ></Form.Check.Label>
            </Form.Check>
            <div>
              <h5 className="mb-1 h6">Credit / Debit Card</h5>
              <p className="mb-0 small">
                Safe money transfer using your bank accou k account. We support
                Mastercard tercard, Visa, Discover and Stripe.
              </p>
            </div>
          </div>

          <Row className="g-2">
            <Col xs={12}>
              <div className="mb-3">
                <Form.Label>Card Number</Form.Label>
                <Form.Control type="text" placeholder="1234 4567 6789 4321" />
              </div>
            </Col>

            <Col md={6} xs={12}>
              <div className="mb-3 mb-lg-0">
                <Form.Label>Name on card</Form.Label>
                <Form.Control type="text" placeholder="Enter your first name" />
              </div>
            </Col>

            <Col md={3} xs={12}>
              <div className="mb-3 mb-lg-0 position-relative">
                <Form.Label>Expiry date</Form.Label>
                <Flatpickr className="form-control" placeholder="Select Date"
                  options={{
                    plugins: [
                      new monthSelectPlugin({
                        dateFormat: "m/Y",
                        altFormat: "m/Y",
                        altInput: true,
                        theme: "light",
                      }),
                    ],
                    static: true,
                  }} />
                <div className="position-absolute bottom-0 end-0 p-3 lh-1">
                  <Calendar className="text-muted" />
                </div>
              </div>
            </Col>

            <Col md={3} xs={12}>
              <div className="mb-3 mb-lg-0">
                <Form.Label>CVV code</Form.Label>
                <Form.Control
                  type="number"
                  name="cvv"
                  placeholder="xxx"
                  maxLength={3}
                  size={3}
                />
              </div>
            </Col>

          </Row>
        </Card.Body>
      </Card>

      <Card border className="shadow-none mb-2">
        <Card.Body className="p-6">
          <div className="d-flex">
            <Form.Check>
              <Form.Check.Input
                type="radio"
                name="flexRadioDefault"
                id="payoneer"
              />
              <Form.Label className="ms-2" htmlFor="payoneer"></Form.Label>
            </Form.Check>
            <div>
              <h5 className="mb-1 h6">Pay with Payoneer</h5>
              <p className="mb-0 small">
                You will be redirected to Payoneer website to complete your
                purchase securely.
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>

      <Card border className="shadow-none mb-2">
        <Card.Body className="p-6">
          <div className="d-flex">
            <Form.Check>
              <Form.Check.Input
                type="radio"
                name="flexRadioDefault"
                id="cashonDelivery"
              />
              <Form.Label
                className="ms-2"
                htmlFor="cashonDelivery"
              ></Form.Label>
            </Form.Check>
            <div>
              <h5 className="mb-1 h6">Cash on Delivery</h5>
              <p className="mb-0 small">
                Pay with cash when your order is delivered.
              </p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PaymentMethodForm;
