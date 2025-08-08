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

const CreateAddressModal = () => {
  const router = useRouter();
  const {
    handleCreateAddressModal,
    isCreateAddressModalOpen,
    createNewAddress,
    selectedCustomer,
  } = useCustomer();

  useEffect(() => {
    if (!selectedCustomer) {
      router.push("/dashboard/customers");
    }
  }, [selectedCustomer, router]);

  const schema = yup
    .object({
      street: yup.string().required("   Please enter street"),
      zip_code: yup.string().required("Please enter zip code"),
      city: yup.string().required("Please enter city"),
      state: yup.string().required("Please enter state"),
      country: yup.string().required("Please select country"),
    })
    .required();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  if (!selectedCustomer) {
    return null;
  }

  // Destructure Select Customer Details
  const { id } = selectedCustomer;

  const submitHandler = (data) => {
    const formValues = {
      id: uuid(),
      street: data.street,
      state: data.state,
      city: data.city,
      country: data.country,
      zip_code: data.zip_code,
    };

    createNewAddress(id, formValues);

    // Form reset
    reset();
    handleCreateAddressModal(false);
  };

  return (
    <Modal
      show={isCreateAddressModalOpen}
      onHide={() => handleCreateAddressModal(false)}
      centered
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Modal.Header className="border-bottom-0">
        <h5 className="modal-title" id="addressLabel">
          Create address
        </h5>
        <Button
          type="button"
          bsPrefix="btn-close"
          onClick={() => handleCreateAddressModal(false)}
        />
      </Modal.Header>

      <Modal.Body className="p-6 d-flex flex-column gap-6">
        <Form onSubmit={handleSubmit(submitHandler)}>
          <Row className="g-3">
            <Col lg={6}>
              <Form.Group>
                <Form.Label>Street</Form.Label>
                <Form.Control
                  type="text"
                  name="street"
                  placeholder="Enter street"
                  isInvalid={errors.street?.message}
                  {...register("street")}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.street?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group>
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  type="text"
                  name="zipcode"
                  placeholder="Enter Zip"
                  isInvalid={errors.zip_code?.message}
                  {...register("zip_code")}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.zip_code?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  placeholder="Enter City"
                  isInvalid={errors.city?.message}
                  {...register("city")}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.city?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group>
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  placeholder="Enter State"
                  isInvalid={errors.state?.message}
                  {...register("state")}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.state?.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col lg={4}>
              <Form.Group>
                <Form.Label>Country</Form.Label>
                <Form.Select
                  name="country"
                  isInvalid={errors.country?.message}
                  {...register("country")}
                >
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="UK">UK</option>
                  <option value="USA">USA</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.country?.message}
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
              onClick={() => handleCreateAddressModal(false)}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateAddressModal;
