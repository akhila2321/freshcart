// import node module libraries
import { Fragment, useState, useEffect } from "react";
import { Container, Row, Col, Navbar, Image, ListGroup, Dropdown, Badge } from "react-bootstrap";
import { TextIndentLeft } from "react-bootstrap-icons";
import { 
  Heart, 
  ShoppingBag, 
  User, 
  LogOut, 
  Settings, 
  User as UserIcon, 
  Key, 
  Mail, 
  ShoppingCart, 
  Gift, 
  CreditCard, 
  MapPin, 
  Award, 
  Bell, 
  HelpCircle, 
  Package,
  LogIn,
  UserPlus,
  Lock
} from "react-feather";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { loadUser, logoutUser } from "store/storeSlices/authSlice";
import { toast } from 'react-hot-toast';

// import custom components
import FreshBadge from "components/common/FreshBadge";
import OffcanvasCart from "components/cart/OffcanvasCart";
import { SignUpModal } from "components/modal/SignUpModal";
import { LocationModal } from "components/modal/LocationModal";

// import required hooks
import { useWishlist } from "hooks/useWishlist";
import useToggle from "hooks/useToggle";
import useCartOperations from "hooks/useCartOperations";

// import sub components
import PickLocationButton from "../sub-components/PickLocationButton";
import FreshcartBrand from "../sub-components/FreshcartBrand";
import SearchInputForm from "../sub-components/SearchInputForm";

const Header = ({ menuToggle }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const logo = useSelector((state) => state.app.logo);
  const { wishListItems } = useWishlist();
  const { cartItems } = useCartOperations();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  
  useEffect(() => {
    // Load user from localStorage on initial render
    dispatch(loadUser());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
    router.push('/');
  };

  //Cart toggle
  const {
    isToggled: isCartOpen,
    toggle: openCart,
    handleClose: closeCart,
  } = useToggle();

  //Location toggle
  const {
    isToggled: isLocationOpen,
    toggle: openLocation,
    handleClose: closeLocation,
  } = useToggle();

  // Sign up toggle
  const {
    isToggled: isSignUpOpen,
    toggle: openSignUp,
    handleClose: closeSignUp,
  } = useToggle();

  return (
    <Fragment>
      <div className="py-5">
        <Container>
          <Row className="w-100 align-items-center gx-lg-2 gx-0">
            <Col xxl={2} lg={3} md={6} xs={5}>
              {/* Desktop Brand Logo */}
              <Navbar.Brand href="/" as={Link} className="d-none d-lg-block">
                <Image src={logo} alt="Fresh Cart" />
              </Navbar.Brand>
              {/* Mobile Brand Logo */}
              <div className="d-flex justify-content-between w-100 d-lg-none">
                <FreshcartBrand />
              </div>
            </Col>

            <Col xxl={5} lg={5} className="d-none d-lg-block">
              <SearchInputForm />
            </Col>
            <Col md={2} xxl={3} className="d-none d-lg-block">
              <PickLocationButton
                btnLabel="Location"
                onClick={openLocation}
                className="text-muted"
              />
            </Col>
            <Col lg={2} xxl={2} md={6} xs={7} className="text-end">
              {/* Desktop Icons */}
              <div className="d-flex align-items-center ms-auto">
                {/* Wishlist */}
                <div 
                  className="d-flex flex-column align-items-center mx-3 text-muted"
                  role="button"
                  onClick={() => router.push("/shop/shop-wishlist")}
                >
                  <div className="position-relative">
                    <Heart size={22} />
                    <FreshBadge
                      content={wishListItems?.length}
                      className="position-absolute top-0 start-100 translate-middle"
                    />
                  </div>
                  <small className="text-center mt-1" style={{fontSize: '0.7rem'}}>Wishlist</small>
                </div>

                {/* Cart */}
                <div 
                  className="d-flex flex-column align-items-center mx-3 text-muted position-relative"
                  role="button"
                  onClick={() => openCart()}
                >
                  <ShoppingBag size={22} />
                  <FreshBadge
                    content={cartItems?.length}
                    className="position-absolute top-0 start-100 translate-middle"
                  />
                  <small className="text-center mt-1" style={{fontSize: '0.7rem'}}>Cart</small>
                </div>

                {/* Account Dropdown */}
                <Dropdown className="ms-2" align="end">
                  <Dropdown.Toggle 
                    variant="link" 
                    id="account-dropdown" 
                    className="text-decoration-none p-0"
                    style={{
                      '--bs-btn-hover-border-color': 'transparent',
                      '--bs-btn-active-border-color': 'transparent',
                      '--bs-btn-focus-box-shadow': 'none',
                      '--bs-btn-active-color': 'inherit',
                      '--bs-btn-hover-color': 'inherit',
                      '--bs-btn-active-bg': 'transparent',
                      '--bs-btn-hover-bg': 'transparent',
                      '--bs-btn-padding-x': '0',
                      '--bs-btn-padding-y': '0',
                      '--bs-btn-line-height': '1',
                      '--bs-btn-border-width': '0',
                      '--bs-btn-border-radius': '0',
                      '--bs-btn-box-shadow': 'none',
                      '--bs-btn-focus-shadow-rgb': 'none',
                      '--bs-btn-active-shadow': 'none',
                      '--bs-btn-disabled-opacity': '1'
                    }}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="d-flex flex-column align-items-center text-muted position-relative">
                      <User size={22} style={{ width: '22px', height: '22px' }} />
                      <small className="text-center mt-1" style={{fontSize: '0.7rem'}}>
                        {isAuthenticated && user?.name ? user.name.split(' ')[0] : 'Account'}
                      </small>
                      {isAuthenticated && (
                        <span className="position-absolute top-0 end-0 translate-middle p-1 bg-success border border-light rounded-circle">
                          <span className="visually-hidden">User is logged in</span>
                        </span>
                      )}
                    </div>
                  </Dropdown.Toggle>
                  <style jsx global>{`
                    #account-dropdown::after {
                      display: none !important;
                    }
                    .dropdown-item {
                      font-size: 0.85rem;
                      padding: 0.5rem 1rem;
                      display: flex;
                      align-items: center;
                    }
                    .dropdown-item i {
                      width: 20px;
                      margin-right: 8px;
                      text-align: center;
                    }
                    .dropdown-header {
                      font-size: 0.75rem;
                      font-weight: 600;
                      text-transform: uppercase;
                      color: #6c757d;
                      padding: 0.5rem 1rem 0.25rem;
                    }
                    .dropdown-divider {
                      margin: 0.25rem 0;
                    }
                    .account-welcome {
                      padding: 0.75rem 1rem;
                      border-bottom: 1px solid #dee2e6;
                    }
                    .account-welcome h6 {
                      margin: 0;
                      font-weight: 600;
                    }
                    .account-welcome p {
                      margin: 0.25rem 0 0;
                      font-size: 0.8rem;
                      color: #6c757d;
                    }
                  `}</style>

                  <Dropdown.Menu className="border-0 shadow-sm" style={{minWidth: '280px'}}>
                    {isAuthenticated ? (
                      // Logged in state
                      <>
                        <div className="account-welcome">
                          <h6>Welcome back, {user?.name?.split(' ')[0] || 'User'}!</h6>
                        </div>
                        
                        <Dropdown.Header>Quick Access</Dropdown.Header>
                        <Dropdown.Item as={Link} href="/user/orders">
                          <i><Package size={16} /></i>
                          Your Orders
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} href="/help">
                          <i><HelpCircle size={16} /></i>
                          Help & Support
                        </Dropdown.Item>

                        <Dropdown.Header>Your Information</Dropdown.Header>
                        <Dropdown.Item as={Link} href="/user/gift-cards">
                          <i><Gift size={16} /></i>
                          E-Gift Cards
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} href="/user/refunds">
                          <i><CreditCard size={16} /></i>
                          Refunds
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} href="/user/addresses">
                          <i><MapPin size={16} /></i>
                          Saved Addresses
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} href="/user/rewards">
                          <i><Award size={16} /></i>
                          Rewards
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} href="/user/payment-methods">
                          <i><CreditCard size={16} /></i>
                          Payment Management
                        </Dropdown.Item>

                        <Dropdown.Header>More</Dropdown.Header>
                        <Dropdown.Item as={Link} href="/suggest-product">
                          <i><ShoppingCart size={16} /></i>
                          Suggest Products
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} href="/notifications">
                          <i><Bell size={16} /></i>
                          Notifications
                          <Badge bg="danger" className="ms-auto rounded-pill">3</Badge>
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} href="/account">
                          <i><UserIcon size={16} /></i>
                          Account Settings
                        </Dropdown.Item>

                        <Dropdown.Divider />
                        <Dropdown.Item 
                          className="text-danger"
                          onClick={handleLogout}
                        >
                          <i><LogOut size={16} /></i>
                          Logout
                        </Dropdown.Item>
                      </>
                    ) : (
                      // Not logged in state
                      <>
                        <div className="account-welcome">
                          <h6>Welcome to ATX Meats</h6>
                          <p>Sign in to access your account</p>
                        </div>
                        <Dropdown.Item as={Link} href="/signin" className="text-primary">
                          <i><LogIn size={16} /></i>
                          Login
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} href="/signup">
                          <i><UserPlus size={16} /></i>
                          Sign Up
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} href="/forgot-password">
                          <i><Lock size={16} /></i>
                          Forgot Password
                        </Dropdown.Item>
                      </>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
                <ListGroup.Item
                  bsPrefix="list-inline-item"
                  className="d-inline-block d-lg-none"
                  role="button"
                >
                  <Navbar.Toggle>
                    <TextIndentLeft
                      size={32}
                      className="text-primary"
                      onClick={() => menuToggle()}
                    />
                  </Navbar.Toggle>
                </ListGroup.Item>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Add Location Modal */}
      <LocationModal
        isLocationOpen={isLocationOpen}
        locationClose={closeLocation}
      />

      {/* Offcanvas Cart */}
      <OffcanvasCart show={isCartOpen} handleClose={closeCart} />

      {/* Sign Up Modal */}
      <SignUpModal isSignUpOpen={isSignUpOpen} signUpClose={closeSignUp} />
    </Fragment>
  );
};

export default Header;
