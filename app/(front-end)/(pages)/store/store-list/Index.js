"use client";
// import node module libraries
import { Fragment } from "react";

// import custom components
import FreshBreadcrumb from "components/common/FreshBreadcrumb";

// import sub components
import VendorList from "./components/VendorList";
import RecentlyViewed from "./components/RecentlyViewed";
import StoreHeading from "components/store/StoreHeading";

const Index = () => {
  return (
    <Fragment>
      <FreshBreadcrumb />
      <StoreHeading />
      <VendorList />
      <RecentlyViewed />
    </Fragment>
  );
};

export default Index;
