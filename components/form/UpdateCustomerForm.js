"use client";
//import node module libraries
import { useState } from "react";
import { Row, Col, Form, Button, Image, Card } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//import custom components
import DatePicker from "components/common/DatePicker";

//import required hooks
import { useCustomer } from "hooks/useCustomer";

const UpdateCustomerForm = () => {
  const { handleUpdateCustomer, selectedCustomer } = useCustomer();
  const { name, image, email, phone, date } = selectedCustomer || {};
  const [profileImage, setProfileImage] = useState(image || null);

  const router = useRouter();

  const schema = yup
    .object({
      name: yup.string().required("Please enter customer name"),
      email: yup
        .string()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/, "Please enter email")
        .required("Please enter email address"),
      number: yup
        .string()
        .matches(/^[0-9]{10}$/, "Please enter a valid phone number")
        .required("Please enter phone"),
      birthday: yup
        .date()
        .nullable()
        .required("Please enter birthday")
        .typeError("Invalid date"),
    })
    .required();

  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: name || "",
      email: email || "",
      number: phone || "",
      birthday: date ? new Date(date) : null,
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const blobUrl = URL.createObjectURL(file);
      setProfileImage(blobUrl);
    }
  };

  const submitHandler = (data) => {
    const updatedCustomer = {
      ...selectedCustomer,
      image:
        profileImage ||
        selectedCustomer?.image ||
        "/images/avatar/avatar-1.jpg",
      name: data.name,
      email: data.email,
      phone: data.number,
      date: data.birthday ? new Date(data.birthday).toISOString() : null,
    };

    handleUpdateCustomer(updatedCustomer);

    // Reset states and redirect
    setProfileImage(null);
    router.push("/dashboard/customers");
    reset();
  };

  return (
    <Col lg={8}>
      <Card className="shadow border-0">
        <Card.Body className="d-flex flex-column gap-8 p-7">
          <div className="d-flex flex-column flex-md-row align-items-center mb-4 file-input-wrapper gap-2">
            <div>
              <Image
                className="image avatar avatar-lg rounded-3"
                src={profileImage || "/images/docs/placeholder-img.jpg"}
                alt="Image"
              />
            </div>

            <div className="file-upload btn btn-light ms-md-4">
              <Form.Control
                type="file"
                className="file-input opacity-0"
                onChange={handleImageChange}
              />
              Upload Photo
            </div>
            <span className="ms-2">JPG, GIF or PNG. 1MB Max.</span>
          </div>
          <div className="d-flex flex-column gap-4">
            <h3 className="mb-0 h6">Customer Information</h3>
            <Form onSubmit={handleSubmit(submitHandler)}>
              <Row className="g-3">
                <Col lg={6}>
                  <div>
                    <Form.Label
                      htmlFor="creatCustomerName"
                      className="form-label"
                    >
                      Name
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      id="creatCustomerName"
                      name="creatCustomerName"
                      placeholder="Customer Name"
                      isInvalid={errors.name?.message}
                      {...register("name")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name?.message}
                    </Form.Control.Feedback>
                  </div>
                </Col>
                <Col lg={6}>
                  <div>
                    <Form.Label
                      htmlFor="creatCustomerEmail"
                      className="form-label"
                    >
                      Email
                      <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="creatCustomerEmail"
                      id="creatCustomerEmail"
                      placeholder="Email Address"
                      isInvalid={errors.email?.message}
                      {...register("email")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email?.message}
                    </Form.Control.Feedback>
                  </div>
                </Col>
                <Col lg={6}>
                  <div>
                    <Form.Label
                      htmlFor="creatCustomerPhone"
                      className="form-label"
                    >
                      Phone
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="creatCustomerPhone"
                      id="creatCustomerPhone"
                      placeholder="Number"
                      isInvalid={errors.number?.message}
                      {...register("number")}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.number?.message}
                    </Form.Control.Feedback>
                  </div>
                </Col>
                <Col lg={6}>
                  <Controller
                    control={control}
                    name="birthday"
                    render={({ field }) => (
                      <DatePicker
                        label="Birthday"
                        placeholder="dd/mm/yyyy"
                        value={field.value}
                        onChange={field.onChange}
                        isInvalid={errors.birthday?.message}
                        errorMessage={errors.birthday?.message}
                      />
                    )}
                  />
                </Col>
                <Col className="mt-3">
                  <div className="d-flex flex-column flex-md-row gap-2">
                    <Button variant="primary" type="submit">
                      Update Customer
                    </Button>
                    <Button
                      variant="secondary"
                      type="button"
                      onClick={() => router.push("/dashboard/customers")}
                    >
                      Cancel
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default UpdateCustomerForm;
