export const WishlistExampleCode = `
"use client";

// import custom components
import WishListTable from "components/shop/WishListTable";

// import required hook
import { useWishlist } from "hooks/useWishlist";

const Page = () => {
  const { wishListItems } = useWishlist();
  
  return <WishListTable data={wishListItems} />;
};

export default Page;

`.trim();
export const OrderExampleCode = `
"use client";

// import custom components
import OrdersTable from "components/shop/OrdersTable";

// import required data file
import { userOrdersData, userOrderColumns } from "data/user/UserOrdersData";

const Page = () => {
  return <OrdersTable columns={userOrderColumns} data={userOrdersData} />
};

export default Page;

`.trim();
