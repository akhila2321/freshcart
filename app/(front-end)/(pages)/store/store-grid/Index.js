"use client";
// import node module libraries
import { Fragment } from "react";

// import sub components
import VendorList from "./components/VendorList";

// import custom components
import FreshBreadcrumb from "components/common/FreshBreadcrumb";
import StoreHeading from "components/store/StoreHeading";

const Index = () => {
  return (
    <Fragment>
      <FreshBreadcrumb />
      <StoreHeading />
      <VendorList />
    </Fragment>
  );
};

export default Index;
