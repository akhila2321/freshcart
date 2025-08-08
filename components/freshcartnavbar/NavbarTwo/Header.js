// import node module libraries
import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

// import custom components
import PickLocationButton from "../sub-components/PickLocationButton";
import { LocationModal } from "components/modal/LocationModal";
import OffcanvasCart from "components/cart/OffcanvasCart";

// import sub components
import MobileHeader from "./MobileHeader";
import MenuIconList from "./MenuIconList";
import DeskTopHeader from "./DeskTopHeader";

// import required hook
import useToggle from "hooks/useToggle";
import { SignUpModal } from "components/modal/SignUpModal";

const Header = ({
  menuOpenToggle,
  isLocationOpen,
  closeLocation,
  openLocation,
}) => {
  //Cart Toggle
  const {
    isToggled: isCartOpen,
    toggle: openCart,
    handleClose: closeCart,
  } = useToggle();

  //SignUp Toggle
  const {
    isToggled: isSignUpOpen,
    toggle: openSignUp,
    handleClose: signUpClose,
  } = useToggle();

  return (
    <Fragment>
      <header className="py-lg-5 py-4 px-0 border-bottom border-bottom-lg-0">
        <Container fluid>
          <Row className="w-100 align-items-center g-0 gx-lg-3">
            <Col xxl={9} lg={8}>
              <DeskTopHeader />
              <MobileHeader
                menuOpenToggle={menuOpenToggle}
                cartToggle={openCart}
                openSignUp={openSignUp}
              />
            </Col>
            <Col xxl={3} lg={4} className="d-flex align-items-center">
              <PickLocationButton
                btnLabel="Pick Location"
                className="text-reset d-none d-lg-block"
                onClick={openLocation}
              />

              <MenuIconList openSignUp={openSignUp} cartToggle={openCart} />
            </Col>
          </Row>
        </Container>
      </header>

      {/* Location Modal */}
      <LocationModal
        isLocationOpen={isLocationOpen}
        locationClose={closeLocation}
      />

      {/* SignUp Modal */}
      <SignUpModal isSignUpOpen={isSignUpOpen} signUpClose={signUpClose} />

      {/* Offcanvas Cart */}
      <OffcanvasCart show={isCartOpen} handleClose={closeCart} />
    </Fragment>
  );
};

export default Header;
