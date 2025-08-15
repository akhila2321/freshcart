// import node module libraries
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { Col, Row, Form, Button, Alert } from "react-bootstrap";
import { EyeSlash, Eye, CheckCircle } from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import Feedback from "react-bootstrap/Feedback";
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { signupUser } from '@/store/storeSlices/authSlice';

const SignUpForm = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsClient(true);
    return () => setMounted(false);
  }, []);
  const dispatch = useDispatch();
  const [isPWDVisible, setPWDVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  // Watch password and confirmPassword fields for validation
  const password = watch('password', '');
  const confirmPassword = watch('confirmPassword', '');

  // Password Visible Toggle
  const handlePasswordVisible = useCallback(() => {
    setPWDVisible((prev) => !prev);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const onSubmitHandler = async (formData) => {
    if (!isClient) return; // Don't run on server
    
    try {
      setIsSubmitting(true);
      setSubmitError('');
      
      const userData = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        password: formData.password
      };
      
      console.log('Submitting signup form with data:', {
        ...userData,
        password: '***' // Don't log actual password
      });
      
      // Use Redux thunk to handle the signup
      const result = await dispatch(signupUser(userData));
      
      // If there was an error in the result, show it
      if (result?.error) {
        setSubmitError(result.error);
        return;
      }
      
      // If we get here, signup and login were successful
      setIsSuccess(true);
      
      // Clear form
      reset({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      
      // Show success message
      toast.success('Account created successfully! Redirecting...');
      
      // Redirect to dashboard after a short delay
      setTimeout(() => {
        router.push('/account/dashboard');
      }, 1500);
      
    } catch (error) {
      console.error('Signup error:', error);
      
      // Handle error from the thunk
      let errorMessage = 'An unexpected error occurred. Please try again.';
      
      if (error.message) {
        errorMessage = error.message;
      } else if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      
      setSubmitError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!mounted) {
    return null; // or a loading spinner
  }

  if (isSuccess) {
    return (
      <div className="text-center py-8">
        <CheckCircle size={48} className="text-success mb-4" />
        <h3>Account Created Successfully!</h3>
        <p className="mb-4">You will be redirected to your dashboard shortly.</p>
      </div>
    );
  }

  return (
    <Col
      xs={{ span: 12, order: 1 }}
      md={6}
      lg={{ span: 4, offset: 1, order: 2 }}
    >
      {/* Heading */}
      <div className="mb-4">
        <h1 className="mb-1 h2 fw-bold">Create Your Account</h1>
        <p className="text-muted">Join ATX Meats today and start shopping!</p>
        
        {submitError && (
          <Alert variant="danger" className="mb-3">
            {submitError}
          </Alert>
        )}
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
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              isInvalid={!!errors.email}
              placeholder="Email"
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
                type={isPWDVisible ? "text" : "password"}
                className="fakePassword"
                id="formSignupPassword"
                placeholder="Password (min 6 characters)"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })}
                isInvalid={!!errors.password}
              />

              <span onClick={handlePasswordVisible}>
                {isPWDVisible ? (
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
          <Col xs={12}>
            <Form.Label htmlFor="formSignupConfirmPassword">
              Confirm Password
            </Form.Label>
            <div className="password-field position-relative">
              <Form.Control
                type={isPWDVisible ? "text" : "password"}
                id="formSignupConfirmPassword"
                placeholder="Confirm your password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: value => 
                    value === password || "Passwords do not match"
                })}
                isInvalid={!!errors.confirmPassword}
              />
              {errors.confirmPassword && (
                <Feedback type="invalid">
                  {errors.confirmPassword.message}
                </Feedback>
              )}
            </div>
          </Col>
          <Col xs={12} className="d-grid mt-3">
            <Button
              variant="primary"
              type="submit"
              className="w-100 py-2 mb-3"
              disabled={isSubmitting || isSuccess}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" />
                  Creating Account...
                </>
              ) : isSuccess ? (
                'Account Created!'
              ) : (
                'Sign Up'
              )}
            </Button>
            
            <div className="text-center text-muted small">
              Already have an account?{' '}
              <Link href="/signin" className="text-primary fw-semi-bold">
                Sign in
              </Link>
            </div>
            {submitError && (
              <div className="text-danger mt-2 text-center">
                {submitError}
              </div>
            )}
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
