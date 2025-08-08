"use client";
// import node module libraries
import { Fragment } from "react";

// import custom components
import DashboardHeading from "components/dashboard/common/DashboardHeading";

// import sub components
import ReviewTable from "../components/ReviewTable";

const Index = () => {
  return (
    <Fragment>
      <DashboardHeading heading="Reviews" />
      <ReviewTable />
    </Fragment>
  );
};

export default Index;
