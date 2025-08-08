// import node module libraries
import { Fragment } from "react";
import { Navbar, Offcanvas } from "react-bootstrap";

// import sub components
import DashboardNavigation from "./DashboardNavigation";

const DashboardSidebar = ({ isOpen, closeMenu }) => {
  return (
    <Fragment>
      <Navbar className="navbar-vertical-nav d-none d-xl-block">
        <DashboardNavigation />
      </Navbar>

      <Offcanvas
        as={Navbar}
        placement="start"
        show={isOpen}
        onHide={closeMenu}
        className="navbar-vertical-nav navbar-offcanvac"
      >
        <DashboardNavigation isOpen={isOpen} handleClose={closeMenu} />
      </Offcanvas>
    </Fragment>
  );
};

export default DashboardSidebar;
