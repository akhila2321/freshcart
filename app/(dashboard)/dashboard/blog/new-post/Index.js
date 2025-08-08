//import node module libraries
import { Fragment } from "react";

//import custom componennts
import DashboardHeading from "components/dashboard/common/DashboardHeading";
import CreateNewBlogForm from "components/form/CreateNewBlogForm";

const Index = () => {
  return (
    <Fragment>
      <DashboardHeading heading="Create a new post" />
      <CreateNewBlogForm />
    </Fragment>
  );
};

export default Index;
