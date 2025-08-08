"use client";

// import sub components
import UserLayout from "../components/UserLayout";
import AddressList from "../components/AddressList";

// import required hooks
import { useMounted } from "hooks/useMounted";

const Index = () => {
  const hasMounted = useMounted();
  return (
    <UserLayout>
      {hasMounted && <AddressList />}
    </UserLayout>
  );
};

export default Index;
