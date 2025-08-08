"use client";
// import node module libraries
import { Fragment } from "react";

// import custom components
import DashboardHeading from "components/dashboard/common/DashboardHeading";

// import sub components
import OrderListTable from "../components/OrderListTable";

const Index = () => {
  return (
    <Fragment>
      <DashboardHeading heading="Order List" />
      <OrderListTable />
    </Fragment>
  );
};

export default Index;
