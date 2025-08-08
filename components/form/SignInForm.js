// import node module libraries
import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Feedback from "react-bootstrap/Feedback";
import { EyeSlash, Eye } from "react-bootstrap-icons";

const SignInForm = () => {
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
    setValue("email", "");
    setValue("password", "");
  };

  return (
    <Col
      xs={{ span: 12, order: 1 }}
      md={6}
      lg={{ span: 4, offset: 1, order: 2 }}
    >
      <div className="mb-lg-9 mb-5">
        <h1 className="mb-1 h2 fw-bold">Sign in to FreshCart</h1>
        <p>Welcome back to FreshCart! Enter your email to get started.</p>
      </div>

      {/* Sign In Form */}
      <Form
        className="needs-validation"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <Row className="g-3">
          <Col xs={12}>
            <Form.Label className="visually-hidden" htmlFor="formSigninEmail">
              Email address
            </Form.Label>
            <Form.Control
              type="email"
              id="formSigninEmail"
              placeholder="Email"
              {...register("email", { required: "Please enter name." })}
              isInvalid={errors.email}
            />

            {errors.email && (
              <Feedback type="invalid">{errors.email.message}</Feedback>
            )}
          </Col>

          <Col xs={12}>
            <div className="password-field position-relative">
              <Form.Label
                className="visually-hidden"
                htmlFor="formSigninPassword"
              >
                Password
              </Form.Label>
              <div className="password-field position-relative">
                <Form.Control
                  type={isPWDVisisble ? "text" : "password"}
                  id="formSigninPassword"
                  className="fakePassword"
                  placeholder="*****"
                  {...register("password", { required: "Please enter name." })}
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
            </div>
          </Col>
          <div className="d-flex justify-content-between">
            <Form.Check>
              <Form.Check.Input
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />

              <Form.Check.Label htmlFor="flexCheckDefault">
                Remember me
              </Form.Check.Label>
            </Form.Check>
            <div>
              Forgot password?
              <Link href="/forgot-password"> Reset It</Link>
            </div>
          </div>

          {/* Sign In Button */}
          <Col xs={12} className="d-grid">
            <Button type="submit" variant="primary">
              Sign In
            </Button>
          </Col>
          <div>
            Don’t have an account?
            <Link href="/signup"> Sign Up</Link>
          </div>
        </Row>
      </Form>
    </Col>
  );
};

export default SignInForm;
