"use client";

// import custom components
import OrdersTable from "components/shop/OrdersTable";

// import sub components
import UserLayout from "../components/UserLayout";

// import required data files
import { userOrdersData, userOrderColumns } from "data/user/UserOrdersData";

const Index = () => {
  return (
    <UserLayout>
      <OrdersTable columns={userOrderColumns} data={userOrdersData} />
    </UserLayout>
  );
};

export default Index;
