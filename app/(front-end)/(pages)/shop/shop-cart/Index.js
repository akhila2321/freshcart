"use client";
// import node module libraries
import { Fragment } from "react";

// import custom components
import FreshBreadcrumb from "components/common/FreshBreadcrumb";

// import sub components
import ShoppingCart from "../components/ShoppingCart";

const Index = () => {
  return (
    <Fragment>
      <FreshBreadcrumb />
      <ShoppingCart />
    </Fragment>
  );
};

export default Index;
