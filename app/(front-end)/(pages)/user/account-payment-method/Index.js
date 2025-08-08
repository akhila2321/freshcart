"use client";
// import sub components
import UserLayout from "../components/UserLayout";
import PaymentMethodList from "../components/PaymentMethodList";

const Index = () => {
  return (
    <UserLayout>
      <PaymentMethodList />
    </UserLayout>
  );
};

export default Index;
