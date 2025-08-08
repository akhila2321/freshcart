// import node module libraries
import { useForm } from "react-hook-form";
import { Modal, Form, Row, Col, Image, Button } from "react-bootstrap";
import Feedback from "react-bootstrap/Feedback";

const AddPaymentMethod = ({ isOpen, closeModal }) => {

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data) => {
    console.log("New Card Details : " + JSON.stringify(data))
    reset({ name: '', month: '', year: '', card: '', cvv: '' })
    closeModal();
  };

  return (
    <Modal
      id="paymentModal"
      centered
      show={isOpen}
      onHide={closeModal}
      size="lg"
    >
      <Modal.Header className="align-items-center d-flex" closeButton>
        <Modal.Title as="h5" id="paymentModalLabel">
          Add New Payment Method
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row
          as="form"
          className="mb-4"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <Col md={12} className="mb-4 mb-3">
            <h5 className="mb-3">Credit / Debit card</h5>
            <div className="d-inline-flex">
              <Form.Check className="me-2">
                <Form.Check.Input
                  type="radio"
                  id="paymentRadioOne"
                  name="paymentRadioOne"
                  defaultChecked
                />
                <Form.Check.Label htmlFor="paymentRadioOne">
                  <Image src="/images/payment/american-express.svg" alt="" />
                </Form.Check.Label>
              </Form.Check>

              <Form.Check className="me-2">
                <Form.Check.Input
                  type="radio"
                  id="paymentRadioTwo"
                  name="paymentRadioOne"
                />
                <Form.Check.Label htmlFor="paymentRadioTwo">
                  <Image src="/images/payment/mastercard.svg" alt="" />
                </Form.Check.Label>
              </Form.Check>

              <Form.Check>
                <Form.Check.Input
                  type="radio"
                  id="paymentRadioFour"
                  name="paymentRadioOne"
                />
                <Form.Check.Label htmlFor="paymentRadioFour">
                  <Image src="/images/payment/visa.svg" alt="" />
                </Form.Check.Label>
              </Form.Check>
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <Form.Label htmlFor="name">Name on card</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Name"
              {...register("name", {
                required: "Please enter name.",
              })}
              isInvalid={errors.name}
            />

            {errors.name && (
              <Feedback type="invalid">{errors.name.message}</Feedback>
            )}
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <Form.Label htmlFor="validationCustom04">Month</Form.Label>
            <Form.Select
              id="validationCustom04"
              {...register("month", {
                required: "Please select month.",
              })}
              isInvalid={errors.month}
            >
              <option value="">Month</option>
              <option value="Jan">Jan</option>
              <option value="Feb">Feb</option>
              <option value="Mar">Mar</option>
              <option value="Apr">Apr</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="Aug">Aug</option>
              <option value="Sep">Sep</option>
              <option value="Oct">Oct</option>
              <option value="Nov">Nov</option>
              <option value="Dec">Dec</option>
            </Form.Select>
            {errors.month && (
              <Feedback type="invalid">{errors.month.message}</Feedback>
            )}
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <Form.Label htmlFor="validationCustom04">Year</Form.Label>
            <Form.Select
              id="validationCustom04"
              {...register("year", {
                required: "Please select year",
              })}
              isInvalid={errors.year}
            >
              <option value="">Year</option>
              <option value="June">2022</option>
              <option value="July">2023</option>
              <option value="August">2024</option>
              <option value="Sep">2025</option>
              <option value="Oct">2026</option>
            </Form.Select>
            {errors.year && (
              <Feedback type="invalid">{errors.year.message}</Feedback>
            )}
          </Col>
          <Col md={8} xs={12} className="mb-3">
            <Form.Label htmlFor="card-mask">Card Number</Form.Label>

            <Form.Control
              type="number"
              name="card"
              id="card"
              placeholder="xxxx-xxxx-xxxx-xxxx"
              maxLength={3}
              {...register("card", {
                required: "Please enter card number.",
                pattern: {
                  value: /^\d{16}$/,
                  message: "Card number must be exactly 16 digits",
                },
              })}
              isInvalid={errors.card}
            />
            {errors.card && (
              <Feedback type="invalid">{errors.card.message}</Feedback>
            )}
          </Col>
          <Col className="mb-3" md={4} xs={12}>
            <div className="mb-3">
              <Form.Label htmlFor="digit-mask">CVV Code</Form.Label>
              <Form.Control
                type="number"
                name="cvv"
                id="digit-mask"
                placeholder="xxx"
                maxLength={3}
                {...register("cvv", {
                  required: "Please enter CVV.",
                  pattern: {
                    value: /^\d{3}$/,
                    message: "CVV must be exactly 3 digits",
                  },
                })}
                isInvalid={errors.cvv}
              />
              {errors.cvv && (
                <Feedback type="invalid">{errors.cvv.message}</Feedback>
              )}
            </div>
          </Col>
          <Col md={6} xs={12}>
            <Button variant="primary" className="me-1" type="submit">
              Add New Card
            </Button>
            <Button variant="outline-gray-400 text-muted" onClick={closeModal}>
              Close
            </Button>
          </Col>
        </Row>
        <span>
          <strong>Note: </strong>
          that you can later remove your card at the account setting page.
        </span>
      </Modal.Body>
    </Modal>
  );
};

export default AddPaymentMethod;
