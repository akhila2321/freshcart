// import node module libraries
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

// import required libraries for form validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ContactForm = () => {
  const schema = yup
    .object({
      firstName: yup.string().required("Please enter first name"),
      lastName: yup.string().required("Please enter last name"),
      companyName: yup.string().required("Please enter company name"),
      title: yup.string().required("Please enter title"),
      email: yup
        .string()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/, "Please enter valid email")
        .required("Please enter email address"),
      mobile: yup
        .string()
        .matches(/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number")
        .required("Please valid mobile number"),
      message: yup.string().required("Please enter message text"),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmitHandler = (data) => {
    console.log(data);
    reset({
      firstName: "",
      lastName: "",
      companyName: "",
      title: "",
      email: "",
      mobile: "",
      message: "",
    });
  };

  return (
    <Row
      as="form"
      className="needs-validation"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <Col md={6} className="mb-3">
        <Form.Label htmlFor="contactFName">
          First Name <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          type="text"
          id="contactFName"
          name="contactFName"
          placeholder="Enter Your First Name"
          isInvalid={errors.firstName?.message}
          {...register("firstName")}
        />
        <div className="form-text text-danger">{errors.firstName?.message}</div>
      </Col>
      <Col md={6} className="mb-3">
        <Form.Label htmlFor="contactLName">
          Last Name <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          type="text"
          id="contactLName"
          placeholder="Enter Your Last name"
          isInvalid={errors.lastName?.message}
          {...register("lastName")}
        />
      </Col>

      <Col md={12} className="mb-3">
        <Form.Label htmlFor="contactCompanyName">
          Company
          <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          type="text"
          id="contactCompanyName"
          name="contactCompanyName"
          placeholder="Your Company"
          isInvalid={errors.companyName?.message}
          {...register("companyName")}
        />
        <div className="form-text text-danger">
          {errors.companyName?.message}
        </div>
      </Col>
      <Col md={12} className="mb-3">
        <Form.Label htmlFor="contactTitle">Title</Form.Label>
        <Form.Control
          type="text"
          id="contactTitle"
          name="contactTitle"
          placeholder="Your Title"
          isInvalid={errors.title?.message}
          {...register("title")}
        />
        <div className="form-text text-danger">{errors.title?.message}</div>
      </Col>
      <Col md={6} className="mb-3">
        <Form.Label htmlFor="contactEmail">
          Email
          <span className="text-danger">*</span>
        </Form.Label>
        <Form.Control
          type="email"
          id="contactEmail"
          name="contactEmail"
          placeholder="Enter Your Email"
          isInvalid={errors.email?.message}
          {...register("email")}
        />
        <div className="form-text text-danger">{errors.email?.message}</div>
      </Col>
      <Col md={6} className="mb-3">
        <Form.Label htmlFor="contactPhone">Phone</Form.Label>
        <Form.Control
          type="text"
          id="contactPhone"
          name="contactPhone"
          placeholder="Your Phone Number"
          isInvalid={errors.mobile?.message}
          {...register("mobile")}
        />
        <div className="form-text text-danger">{errors.mobile?.message}</div>
      </Col>
      <Col md={12} className="mb-3">
        <Form.Label htmlFor="contactTearea">Write Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          id="contactTearea"
          placeholder="Additional Comments"
          isInvalid={errors.message?.message}
          {...register("message")}
        />
        <div className="form-text text-danger">{errors.message?.message}</div>
      </Col>
      <Col md={12}>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Col>
    </Row>
  );
};

export default ContactForm;
