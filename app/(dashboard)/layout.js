"use client";

// import node module libraries
import { Fragment, useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

// import custom components
import DashboardSidebar from "components/dashboard/navbar/DashboardSidebar";
import DashboardTopbar from "components/dashboard/navbar/DashboardTopbar";
import BuyNow from "components/footer/BuyNow";
import CreateAddressModal from "components/modal/CreateAddressModal";
import CreatePaymentModal from "components/modal/CreatePaymentModal";

// import required hook
import useToggle from "hooks/useToggle";

// Custom loading component
const DashboardLoading = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
);

const DashboardLayout = ({ children }) => {
  const { isToggled, toggle, handleClose } = useToggle();
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push(`/signin?redirect=${encodeURIComponent(router.pathname)}`);
    }
  }, [isAuthenticated, isLoading, router]);

  // Show loading state while checking auth status
  if (isLoading) {
    return <DashboardLoading />;
  }

  // Don't render dashboard if not authenticated
  if (!isAuthenticated) {
    return null;
  }

  return (
    <Fragment>
      <DashboardTopbar openMenu={toggle} user={user} />
      <div className="main-wrapper">
        <DashboardSidebar isOpen={isToggled} closeMenu={handleClose} user={user} />
        <main className="main-content-wrapper">
          <Container fluid="lg" className="py-4">
            {children}
          </Container>
        </main>
        <BuyNow />
      </div>

      <CreateAddressModal />
      <CreatePaymentModal />
    </Fragment>
  );
};

export default DashboardLayout;
