"use client";
// import node module libraries
import { Fragment } from "react";

// import custom components
import DashboardHeading from "components/dashboard/common/DashboardHeading";

// import sub components
import ProductTable from "../components/ProductTable";

const Index = () => {
  return (
    <Fragment>
      <DashboardHeading
        heading="Products"
        btnLabel="Add Product"
        btnLink="/dashboard/products/add-product"
      />
      <ProductTable />
    </Fragment>
  );
};

export default Index;
