// import node module libraries
import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

// import sub componetns
import FreshcartBrand from "../sub-components/FreshcartBrand";
import SearchInputForm from "../sub-components/SearchInputForm";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

// import custom components
import AddLocationModal from "components/modal/AddLocationModal";
import RegisterViaPhoneModal from "components/modal/RegisterViaPhoneModal";

// import required hooks
import useToggle from "hooks/useToggle";

const Header = ({ menuToggle }) => {
  // Add Location Toggle
  const {
    isToggled: isAddLocationOpen,
    toggle: openAddLocation,
    handleClose: closeAddLocation,
  } = useToggle();

  // Register Toggle
  const {
    isToggled: isRegisterOpen,
    toggle: openRegister,
    handleClose: closeRegister,
  } = useToggle();

  return (
    <Fragment>
      <header className="py-lg-5 py-4 border-bottom border-bottom-lg-0">
        <Container>
          <Row className="w-100 align-items-center gx-3">
            <Col xl={7} lg={8}>
              <div className="d-flex align-items-center">
                <FreshcartBrand className="d-none d-lg-block" />
                <div className="w-100 ms-4 d-none d-lg-block">
                  <SearchInputForm />
                </div>
              </div>

              {/* Mobile Header */}
              <MobileHeader
                menuToggle={menuToggle}
                openAddLocation={openAddLocation}
              />
            </Col>
            <Col xl={5} lg={4} className="d-flex align-items-center">
              <DesktopHeader
                openAddLocation={openAddLocation}
                openRegister={openRegister}
              />
            </Col>
          </Row>
        </Container>
      </header>

      {/* Add Location Modal */}
      <AddLocationModal show={isAddLocationOpen} close={closeAddLocation} />

      {/* Register Modal */}
      <RegisterViaPhoneModal
        isOpen={isRegisterOpen}
        handleClose={closeRegister}
      />
    </Fragment>
  );
};

export default Header;
