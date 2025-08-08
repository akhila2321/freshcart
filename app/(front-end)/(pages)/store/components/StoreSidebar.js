// import node module libraries
import { Fragment } from "react";

// import sub components
import StoreDetails from "components/store/StoreDetails";
import StoreNavigation from "components/store/StoreNavigation";
import StoreCategoryNavigation from "components/store/StoreCategoryNavigation";

const StoreSidebar = () => {
  return (
    <Fragment>
      <StoreDetails />
      <hr />
      <StoreNavigation />
      <hr />
      <StoreCategoryNavigation />
    </Fragment>
  );
};

export default StoreSidebar;
