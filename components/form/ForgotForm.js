"use client";

// import node module libraries
import Link from "next/link";
import { Col, Form, Button, Row } from "react-bootstrap";
import Feedback from "react-bootstrap/Feedback";
import { useForm } from "react-hook-form";

const ForgotForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const onSubmitHandler = (data) => {
    setValue("email", "");
  };

  return (
    <Col
      xs={{ span: 12, order: 1 }}
      md={6}
      lg={{ span: 4, offset: 1, order: 2 }}
      className="d-flex align-items-center"
    >
      <div>
        <div className="mb-lg-9 mb-5">
          <h1 className="mb-2 h2 fw-bold">Forgot your password?</h1>
          <p>
            Please enter the email address associated with your account and We
            will email you a link to reset your password.
          </p>
        </div>
        {/* Forgot Password Form */}
        <Form
          className="needs-validation"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <Row className="g-3">
            <Col xs={12}>
              <Form.Label htmlFor="formForgetEmail" className="visually-hidden">
                Email address
              </Form.Label>
              <Form.Control
                type="email"
                id="formForgetEmail"
                placeholder="Email"
                {...register("email", {
                  required: "Please enter correct email.",
                })}
                isInvalid={errors.email}
              />

              {errors.email && (
                <Feedback type="invalid">{errors.email.message}</Feedback>
              )}
            </Col>

            <Col xs={12} className="d-grid gap-2">
              <Button type="submit" variant="primary">
                Reset Password
              </Button>
              <Button variant="light" href="/signin" as={Link}>
                Back
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Col>
  );
};

export default ForgotForm;
