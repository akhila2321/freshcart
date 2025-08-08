"use client";
//import node modules libraries
import { Fragment } from "react";

//import custom components
import DashboardHeading from "components/dashboard/common/DashboardHeading";
import CreateCustomerForm from "components/form/CreateCustomerForm";

const Index = () => {
  return (
    <Fragment>
      <DashboardHeading heading="Create Customer" />
      <CreateCustomerForm />
    </Fragment>
  );
};

export default Index;
