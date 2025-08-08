// import node module libraries
import { Fragment } from "react";

// import custom components
import DashboardHeading from "components/dashboard/common/DashboardHeading";

// import sub components
import CategoryTable from "../components/CategoryTable";

const Index = () => {
  return (
    <Fragment>
      <DashboardHeading
        heading="Categories"
        btnLabel={"Add New Category"}
        btnLink={"/dashboard/categories/add-category"}
      />

      <CategoryTable />
    </Fragment>
  );
};

export default Index;
