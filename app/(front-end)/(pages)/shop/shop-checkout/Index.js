"use client";
// import node module libraries
import { Fragment } from "react";

// import custom components
import FreshBreadcrumb from "components/common/FreshBreadcrumb";

// import sub components
import CheckoutAccordion from "../components/CheckoutAccordion";

const Index = () => {
  return (
    <Fragment>
      <FreshBreadcrumb />
      <CheckoutAccordion />
    </Fragment>
  );
};

export default Index;
