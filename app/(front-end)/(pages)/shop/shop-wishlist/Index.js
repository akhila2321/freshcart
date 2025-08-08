"use client";
// import node module libraries
import { Fragment } from "react";

// import custom components
import FreshBreadcrumb from "components/common/FreshBreadcrumb";
import WishListTable from "components/shop/WishListTable";

// import required hooks
import { useWishlist } from "hooks/useWishlist";

const Index = () => {
  const { wishListItems } = useWishlist();
  return (
    <Fragment>
      <FreshBreadcrumb />
      <WishListTable data={wishListItems} />
    </Fragment>
  );
};

export default Index;
