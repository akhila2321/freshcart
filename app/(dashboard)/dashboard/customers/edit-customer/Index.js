"use client";
import { Fragment } from "react";
import { Row } from "react-bootstrap";

//import custom components
import DashboardHeading from "components/dashboard/common/DashboardHeading";
import UpdateCustomerForm from "components/form/UpdateCustomerForm";
import CustomerDetails from "../../components/CustomerDetails";
import CustomerAdditionalInfo from "../../components/CustomerAdditionalInfo";

const Index = () => {
  return (
    <Fragment>
      <DashboardHeading
        heading="Edit Customer Name"
        variant="danger"
        btnLabel={"Delete"}
      />

      <Row className="mb-8 g-5">
        <UpdateCustomerForm />
        <CustomerDetails />
      </Row>
      <CustomerAdditionalInfo />
    </Fragment>
  );
};

export default Index;
