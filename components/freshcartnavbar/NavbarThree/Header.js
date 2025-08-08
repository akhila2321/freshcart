// import node module libraries
import { Fragment } from "react";
import { Navbar, Container, Row, Col, ListGroup } from "react-bootstrap";
import { TextIndentRight } from "react-bootstrap-icons";
import { Heart, MapPin, ShoppingBag, User } from "react-feather";
import Link from "next/link";

// import required hooks
import { useWishlist } from "hooks/useWishlist";
import useCartOperations from "hooks/useCartOperations";
import useToggle from "hooks/useToggle";

// import custom components
import FreshBadge from "components/common/FreshBadge";
import OffcanvasCart from "components/cart/OffcanvasCart";
import { SignUpModal } from "components/modal/SignUpModal";
import { LocationModal } from "components/modal/LocationModal";

// import sub components
import SearchInputForm from "../sub-components/SearchInputForm";
import MobileHeader from "./MobileHeader";
import FreshcartBrand from "../sub-components/FreshcartBrand";
import OffcanvasMenu from "./OffcanvasMenu";

const Header = () => {
  const { wishListItems } = useWishlist();
  const { cartItems } = useCartOperations();

  // Cart toggle
  const {
    isToggled: isCartOpen,
    toggle: openCart,
    handleClose: closeCart,
  } = useToggle();

  //Sign up toggle
  const {
    isToggled: isSignUpOpen,
    toggle: openSignUp,
    handleClose: closeSignUp,
  } = useToggle();

  // Cart toggle
  const {
    isToggled: isLocationOpen,
    toggle: openLocation,
    handleClose: closeLocation,
  } = useToggle();

  //Menu Toggle
  const {
    isToggled: isMenuOpen,
    toggle: openMenu,
    handleClose: menuClose,
  } = useToggle();

  return (
    <Fragment>
      <Navbar className="py-lg-4 py-3 px-0 border-bottom navbar-menu">
        <Container fluid>
          <Row className="w-100 align-items-center g-0 gx-lg-3">
            <Col xxl={9} lg={8}>
              <div className="d-flex align-items-center">
                <Navbar.Toggle className="d-none d-lg-block">
                  <TextIndentRight
                    size={32}
                    className="text-primary"
                    onClick={() => openMenu()}
                  />
                </Navbar.Toggle>

                <FreshcartBrand className="d-none d-lg-block ms-4" />

                <div className="d-flex w-100 ms-4">
                  <SearchInputForm className="w-100 d-none d-lg-block" />
                </div>
              </div>

              <MobileHeader
                openMenu={openMenu}
                openSignUp={openSignUp}
                openCart={openCart}
              />
            </Col>
            <Col
              xxl={3}
              lg={4}
              className="d-flex align-items-center justify-content-end"
            >
              <ListGroup bsPrefix="list-inline" className="d-lg-block d-none">
                <ListGroup.Item bsPrefix="list-inline-item" role="button">
                  <Link
                    className="me-4 text-reset position-relative"
                    href="/shop/shop-wishlist"
                  >
                    <Heart size={20} />
                    <FreshBadge
                      content={wishListItems?.length}
                      bg="success"
                      className="position-absolute top-0 start-100 translate-middle"
                    />
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item bsPrefix="list-inline-item" role="button">
                  <Link
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      openLocation();
                    }}
                    className="me-4 text-reset"
                  >
                    <MapPin size={20} />
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item bsPrefix="list-inline-item" role="button">
                  <Link
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      openSignUp();
                    }}
                    className="me-4 text-reset"
                  >
                    <User size={20} />
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item bsPrefix="list-inline-item" role="button">
                  <Link
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      openCart();
                    }}
                    className="text-reset position-relative"
                  >
                    <ShoppingBag size={20} />
                    <FreshBadge
                      content={cartItems?.length}
                      className="position-absolute top-0 start-100 translate-middle"
                      bg="success"
                    />
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>

          <OffcanvasMenu isMenuOpen={isMenuOpen} menuClose={menuClose} />
        </Container>
      </Navbar>

      {/* Location Modal */}
      <LocationModal
        isLocationOpen={isLocationOpen}
        locationClose={closeLocation}
      />

      {/* Sign Up Modal */}
      <SignUpModal isSignUpOpen={isSignUpOpen} signUpClose={closeSignUp} />

      {/* Offcanvas Cart */}
      <OffcanvasCart show={isCartOpen} handleClose={closeCart} />
    </Fragment>
  );
};

export default Header;
