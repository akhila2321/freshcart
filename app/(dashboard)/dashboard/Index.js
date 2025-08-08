"use client";
// import node module libraries
import { Fragment } from "react";

// import sub components
import DashboardBanner from "./components/DashboardBanner";
import DashboardStats from "./components/DashboardStats";
import DashboardChart from "./components/DashboardChart";
import SaleOverview from "./components/SaleOverview";
import RecentOrderTable from "./components/RecentOrderTable";

const Index = () => {
  return (
    <Fragment>
      <DashboardBanner />
      <DashboardStats />
      <DashboardChart />
      <SaleOverview />
      <RecentOrderTable />
    </Fragment>
  );
};

export default Index;
