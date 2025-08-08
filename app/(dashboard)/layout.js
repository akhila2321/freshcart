"use client";

// import node module libraries
import { Fragment } from "react";
import { Container } from "react-bootstrap";

// import custom components
import DashboardSidebar from "components/dashboard/navbar/DashboardSidebar";
import DashboardTopbar from "components/dashboard/navbar/DashboardTopbar";
import BuyNow from "components/footer/BuyNow";
import CreateAddressModal from "components/modal/CreateAddressModal";
import CreatePaymentModal from "components/modal/CreatePaymentModal";

// import requierd hook
import useToggle from "hooks/useToggle";

const DashboardLayout = ({ children }) => {
  const { isToggled, toggle, handleClose } = useToggle();

  return (
    <Fragment>
      <DashboardTopbar openMenu={toggle} />
      <div className="main-wrapper">
        <DashboardSidebar isOpen={isToggled} closeMenu={handleClose} />
        <main className="main-content-wrapper">
          <Container>{children}</Container>
        </main>
        <BuyNow />
      </div>

      <CreateAddressModal />
      <CreatePaymentModal />
    </Fragment>
  );
};

export default DashboardLayout;
