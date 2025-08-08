"use client";
// import node module libraries
import { useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// import required hooks
import { useCustomer } from "hooks/useCustomer";

const CreatePaymentModal = () => {
  const router = useRouter();
  const {
    handleCreatePaymentModal,
    isCreatePaymentModalOpen,
    createNewPayment,
    selectedCustomer,
  } = useCustomer();

  useEffect(() => {
    if (!selectedCustomer) {
      router.push("/dashboard/customers");
    }
  }, [selectedCustomer, router]);

  const schema = yup
    .object({
      order_id: yup.string().required("Please enter order id"),
      transaction_id: yup.string().required("Please enter transaction id"),
      amount: yup.string().required("Please enter amount"),
      status: yup.string().required("Please select a valid status."),
      method: yup.string().required("Please select a payment method."),
    })
    .required();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const selectedMethod = watch("method");

  if (!selectedCustomer) {
    return null;
  }

  const { id } = selectedCustomer;

  const submitHandler = (data) => {
    const formValues = {
      id: uuid(),
      order_id: data.order_id,
      transaction_id: data.transaction_id,
      date: new Date().toISOString(),
      amount: data.amount,
      status: data.status,
      method: data.method,
    };

    createNewPayment(id, formValues);

    //Form reset
    reset();
    handleCreatePaymentModal(false);
  };

  return (
    <Modal
      show={isCreatePaymentModalOpen}
      onHide={() => handleCreatePaymentModal(false)}
      centered
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Modal.Header className="border-bottom-0">
        <h5 className="modal-title" id="addressLabel">
          Create payment
        </h5>
        <Button
          type="button"
          bsPrefix="btn-close"
          onClick={() => handleCreatePaymentModal(false)}
        />
      </Modal.Header>

      <Modal.Body className="p-6 d-flex flex-column gap-6">
        <Form onSubmit={handleSubmit(submitHandler)}>
          <Row className="g-3">
            <Col lg={6}>
              <Form.Group>
                <Form.Label>Order</Form.Label>
                <Form.Control
                  type="text"
                  name="orderId"
                  placeholder="Order Id"
                  isInvalid={errors.order_id?.message}
                  {...register("order_id")}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.order_id?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col lg={6}>
              <Form.Group>
                <Form.Label>Transaction Id</Form.Label>
                <Form.Control
                  type="text"
                  name="transactionId"
                  placeholder="Transaction Id"
                  isInvalid={errors.transaction_id?.message}
                  {...register("transaction_id")}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.transaction_id?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col lg={6}>
              <Form.Group>
                <Form.Label>Amount*</Form.Label>
                <Form.Control
                  type="number"
                  name="amount"
                  placeholder="Amount"
                  min="0"
                  step="0.01"
                  isInvalid={errors.amount?.message}
                  {...register("amount")}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.amount?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col lg={6}>
              <Form.Group>
                <Form.Label>Status*</Form.Label>
                <Form.Select
                  name="status"
                  isInvalid={errors.status?.message}
                  {...register("status")}
                >
                  <option value="">Status</option>
                  <option value="Completed">Complete</option>
                  <option value="Failed">Failed</option>
                  <option value="Pending">Pending</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.status?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col xs={12}>
              <Form.Group>
                <span className="fw-medium text-dark mb-1 d-block">
                  Method*
                </span>
                <div className="d-flex flex-column flex-md-row gap-2">
                  {["Credit Card", "Bank Transfer", "PayPal"].map((method) => (
                    <div key={method}>
                      <Form.Check
                        type="radio"
                        className="btn-check"
                        name="method"
                        id={`btnradio-${method}`}
                        value={method}
                        isInvalid={errors.method?.message}
                        {...register("method")}
                      />
                      <label
                        className={`btn ${
                          selectedMethod === method
                            ? "btn-primary"
                            : "btn-outline-secondary"
                        }`}
                        htmlFor={`btnradio-${method}`}
                      >
                        {method}
                      </label>
                    </div>
                  ))}
                </div>
                <Form.Control.Feedback type="invalid">
                  {errors.method?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <div className="d-flex flex-row gap-3 pt-5">
            <Button type="submit" variant="primary">
              Create
            </Button>
            <Button
              type="button"
              variant="secondary"
              onClick={() => handleCreatePaymentModal(false)}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreatePaymentModal;
