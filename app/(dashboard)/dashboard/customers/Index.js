"use client";
// import node module libraries
import { Fragment } from "react";

// import custom components
import DashboardHeading from "components/dashboard/common/DashboardHeading";
import CustomerTable from "../components/CustomerTable";

const Index = () => {
  return (
    <Fragment>
      <DashboardHeading
        heading="Customers"
        btnLabel={"Add New Customer"}
        btnLink={"/dashboard/customers/create-customer"}
      />

      <CustomerTable />
    </Fragment>
  );
};

export default Index;
