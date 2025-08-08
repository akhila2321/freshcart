// import node module libraries
import Link from "next/link";
import { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { EyeSlash, Eye } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import Feedback from "react-bootstrap/Feedback";

const SignUpForm = () => {
  const [isPWDVisisble, setPWDVisible] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Password Visible Toggle
  const handlePasswordVisible = () => {
    setPWDVisible((prev) => !prev);
  };

  const onSubmitHandler = (data) => {
    setValue("firstName", "");
    setValue("lastName", "");
    setValue("email", "");
    setValue("password", "");
  };

  return (
    <Col
      xs={{ span: 12, order: 1 }}
      md={6}
      lg={{ span: 4, offset: 1, order: 2 }}
    >
      {/* Heading */}
      <div className="mb-lg-9 mb-5">
        <h1 className="mb-1 h2 fw-bold">Get Start Shopping</h1>
        <p>Welcome to FreshCart! Enter your email to get started.</p>
      </div>

      {/* Sign Up Form */}
      <Form
        className="needs-validation"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <Row className="g-3">
          <Col>
            <Form.Label className="visually-hidden" htmlFor="formSignupfname">
              First Name
            </Form.Label>
            <Form.Control
              type="text"
              id="formSignupfname"
              placeholder="First Name"
              {...register("firstName", {
                required: "Please enter first name.",
              })}
              isInvalid={errors.firstName}
            />
            {errors.firstName && (
              <Feedback type="invalid">{errors.firstName.message}</Feedback>
            )}
          </Col>

          <Col>
            <Form.Label className="visually-hidden" htmlFor="formSignuplname">
              Last Name
            </Form.Label>
            <Form.Control
              type="text"
              id="formSignuplname"
              placeholder="Last Name"
              {...register("lastName", {
                required: "Please enter last name.",
              })}
              isInvalid={errors.lastName}
            />
            {errors.lastName && (
              <Feedback type="invalid">{errors.lastName.message}</Feedback>
            )}
          </Col>

          <Col xs={12}>
            <Form.Label className="visually-hidden" htmlFor="formSignupEmail">
              Email address
            </Form.Label>
            <Form.Control
              type="text"
              id="formSignupEmail"
              placeholder="Email"
              {...register("email", {
                required: "Please enter email.",
              })}
              isInvalid={errors.email}
            />
            {errors.email && (
              <Feedback type="invalid">{errors.email.message}</Feedback>
            )}
          </Col>

          <Col xs={12}>
            <Form.Label
              className="visually-hidden"
              htmlFor="formSignupPassword"
            >
              Password
            </Form.Label>
            <div className="password-field position-relative">
              <Form.Control
                type={isPWDVisisble ? "text" : "password"}
                className="fakePassword"
                id="formSignupPassword"
                placeholder="*****"
                {...register("password", {
                  required: "Please enter password.",
                })}
                isInvalid={errors.password}
              />

              <span onClick={handlePasswordVisible}>
                {isPWDVisisble ? (
                  <Eye className="passwordToggler" />
                ) : (
                  <EyeSlash className="passwordToggler" />
                )}
              </span>

              {errors.password && (
                <Feedback type="invalid">{errors.password.message}</Feedback>
              )}
            </div>
          </Col>
          <Col xs={12} className="d-grid">
            <Button type="submit" variant="primary">
              Register
            </Button>
          </Col>
          <p>
            <small>
              By continuing, you agree to our
              <Link href="#!"> Terms of Service</Link> &
              <Link href="#!"> Privacy Policy</Link>
            </small>
          </p>
        </Row>
      </Form>
    </Col>
  );
};

export default SignUpForm;
