// import node module libraries
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  Image,
  InputGroup,
  Form,
  Button,
  Nav,
  Navbar,
  NavDropdown,
  Dropdown,
} from "react-bootstrap";
import { Archive, Bell, Cart2, PersonCircle, List } from "react-bootstrap-icons";

// import sub components
import Topbar from "./Topbar";

// import custom components
import FreshBadge from "components/common/FreshBadge";

//Custom Toggle Function
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <Link
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    className="text-reset"
  >
    {children}
  </Link>
));

CustomToggle.displayName = "Custom Toggle";

const Header = ({ signUpToggle, cartToggle, menuToggle, activeView, onNavigate }) => {
  const logo = useSelector((state) => state.app.logo);
  const cart = useSelector((state) => state.cart);
  
  // Calculate total items in cart
  const cartItemCount = cart.items?.reduce((total, item) => total + item.quantity, 0) || 0;

  const handleNavClick = (view) => {
    onNavigate?.(view);
  };

  return (
    <header className="border-bottom">
      <Container fluid="lg">
        <Topbar />
        <Row className="align-items-center py-2 py-lg-3">
          {/* Logo and Mobile Menu Button */}
          <Col xl={2} lg={3} md={3} xs={3} className="d-flex align-items-center">
            <Button 
              variant="outline-secondary" 
              className="d-lg-none me-2 border-0"
              onClick={menuToggle}
              aria-label="Toggle navigation"
            >
              <List size={20} />
            </Button>
            <Link href="/" className="d-flex align-items-center" style={{ height: '40px' }}>
              <Image src={logo} alt="FreshCart" className="h-100" style={{ maxWidth: '100%', objectFit: 'contain' }} />
            </Link>
          </Col>
          
          {/* Desktop Navigation */}
          <Col xl={6} lg={5} className="d-none d-lg-block">
            <Nav className="align-items-center h-100">
              <Nav.Item>
                <Link 
                  href="/" 
                  className={`nav-link px-3 py-2 ${activeView === 'home' ? 'text-primary fw-bold' : 'text-dark'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('home');
                  }}
                >
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link 
                  href="/departments" 
                  className={`nav-link px-3 py-2 ${activeView === 'departments' ? 'text-primary fw-bold' : 'text-dark'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('departments');
                  }}
                >
                  Departments
                </Link>
              </Nav.Item>
            </Nav>
          </Col>
          
          {/* Right Side Icons */}
          <Col xl={4} lg={4} md={9} xs={9} className="d-flex justify-content-end">
            <div className="d-flex align-items-center">
              <Button 
                variant="outline-secondary" 
                className="me-2 d-none d-md-flex align-items-center" 
                onClick={signUpToggle}
                aria-label="Account"
              >
                <PersonCircle className="me-1" />
                <span className="d-none d-xl-inline">Login / Sign Up</span>
              </Button>
              
              {/* Mobile Account Button */}
              <Button 
                variant="outline-secondary" 
                className="me-2 d-md-none" 
                onClick={signUpToggle}
                aria-label="Account"
              >
                <PersonCircle />
              </Button>
              
              {/* Cart Button */}
              <Button 
                variant="outline-secondary" 
                className="position-relative me-2" 
                onClick={cartToggle}
                aria-label="Cart"
              >
                <Cart2 />
                {cartItemCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.6rem' }}>
                    {Math.min(cartItemCount, 99)}{cartItemCount > 99 ? '+' : ''}
                  </span>
                )}
              </Button>
              <Button variant="outline-secondary" onClick={cartToggle}>
                <Cart2 className="me-1" />
                Cart <FreshBadge count={0} />
              </Button>
            </div>
          </Col>

          <Col xxl={6} xl={5} lg={6} md={9}>
            <Form action="#">
              <InputGroup>
                <Form.Control type="search" placeholder="Search for products" />
                <Button variant="primary" type="button" id="button-addon2">
                  Search
                </Button>
              </InputGroup>
            </Form>
          </Col>

          <Col xxl={4} xl={5} lg={3} className="d-none d-lg-block">
            <div className="d-flex align-items-center justify-content-between ms-4">
              <div className="text-center">
                <Dropdown>
                  <Dropdown.Toggle as={CustomToggle}>
                    <div className="lh-1">
                      <div className="position-relative d-inline-block mb-2">
                        <Bell className="fs-4" />
                        <FreshBadge
                          content="1"
                          className="position-absolute top-0 start-100 translate-middle"
                          bg="danger"
                        />
                      </div>
                      <p className="mb-0 d-none d-xl-block small">
                        Notification
                      </p>
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu bsPrefix="dropdown-menu dropdown-menu-lg p-0">
                    <div>
                      <h6 className="px-4 border-bottom py-3 mb-0">
                        Notification
                      </h6>
                      <p className="mb-0 px-4 py-3">
                        <Link href="/signin">Sign in </Link>
                        or
                        <Link href="/signup"> register </Link>
                        in or so you don t have to enter your details every time
                      </p>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="ms-6 text-center">
                <Link
                  href="#"
                  className="text-reset"
                  onClick={(e) => {
                    e.preventDefault();
                    signUpToggle();
                  }}
                >
                  <div className="lh-1">
                    <div className="mb-2">
                      <PersonCircle className="fs-4" />
                    </div>
                    <p className="mb-0 d-none d-xl-block small">Sign up</p>
                  </div>
                </Link>
              </div>
              <div className="ms-6 text-center">
                <Link href="/user/account-orders" className="text-reset">
                  <div className="lh-1">
                    <div className="mb-2">
                      <Archive className="fs-4" />
                    </div>
                    <p className="mb-0 d-none d-xl-block small">My Orders</p>
                  </div>
                </Link>
              </div>
              <div className="text-center ms-6">
                <Link
                  className="text-reset"
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    cartToggle();
                  }}
                >
                  <div className="text-center">
                    <div className="mb-2">
                      <Cart2 className="fs-4" />
                    </div>
                    <p className="mb-0 d-none d-xl-block small">
                      Shopping Cart
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
