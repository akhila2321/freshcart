"use client";
// import node module libraries
import { Fragment } from "react";

// import custom components
import DashboardHeading from "components/dashboard/common/DashboardHeading";
import AddCategoryForm from "components/form/AddCategoryForm";

const Index = () => {
  return (
    <Fragment>
      <DashboardHeading
        heading="Add New Category"
        btnLabel={"Back to Categories"}
        btnLink={"/dashboard/categories"}
        variant="light"
      />
      <AddCategoryForm />
    </Fragment>
  );
};

export default Index;
