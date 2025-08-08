"use client";
// import node module libraries
import { Fragment } from "react";

// import custom components
import DashboardHeading from "components/dashboard/common/DashboardHeading";
import AddProductForm from "components/form/AddProductForm";

const Index = () => {
  return (
    <Fragment>
      <DashboardHeading
        heading="Add New Product"
        btnLabel="Back to Product"
        btnLink="/dashboard/products"
        variant="light"
      />

      <AddProductForm />
    </Fragment>
  );
};

export default Index;
