'use client';

import { Fragment, useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Form, Button, Image, Badge, Dropdown } from 'react-bootstrap';
import { Search, MapPin, Heart, User, ShoppingCart, ChevronDown } from 'react-feather';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const GlobalHeader = () => {
  const router = useRouter();
  const logo = useSelector((state) => state.app.logo);
  const { cartItems } = useSelector((state) => state.cart);
  const [searchQuery, setSearchQuery] = useState('');

  // Calculate total items in cart
  const cartItemCount = cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <Fragment>
      {/* Top Bar */}
      <div className="bg-light border-bottom py-2">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="d-none d-md-block">
              <span className="text-muted small">Welcome to FreshCart - Your One-Stop Shop</span>
            </Col>
            <Col md={6} className="text-md-end">
              <Nav className="justify-content-end">
                <Nav.Link href="/about" className="text-muted small">About Us</Nav.Link>
                <Nav.Link href="/contact" className="text-muted small ms-3">Contact</Nav.Link>
                <Nav.Link href="/help" className="text-muted small ms-3">Help & FAQs</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Header */}
      <header className="border-bottom">
        <Container>
          <Row className="align-items-center py-3">
            {/* Logo */}
            <Col lg={2} md={3} xs={6} className="mb-3 mb-md-0">
              <Link href="/">
                <Image src={logo} alt="FreshCart" fluid style={{ maxHeight: '40px' }} />
              </Link>
            </Col>

            {/* Search Bar */}
            <Col lg={6} md={7} className="mb-3 mb-md-0">
              <Form className="d-flex" onSubmit={handleSearch}>
                <div className="input-group">
                  <Form.Control
                    type="search"
                    placeholder="Search for 'special offers'"
                    className="border-end-0"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button variant="primary" type="submit">
                    <Search size={18} />
                  </Button>
                </div>
              </Form>
            </Col>

            {/* Icons */}
            <Col lg={4} md={2} xs={6} className="d-flex justify-content-end">
              <div className="d-flex align-items-center">
                {/* Location */}
                <Button variant="outline-secondary" className="me-2 d-none d-lg-flex align-items-center">
                  <MapPin size={18} className="me-1" />
                  <span>Location</span>
                </Button>
                
                {/* Wishlist */}
                <Button variant="outline-secondary" className="me-2 position-relative">
                  <Heart size={18} />
                  <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle rounded-pill">
                    0
                  </Badge>
                </Button>
                
                {/* Account */}
                <Dropdown className="me-2">
                  <Dropdown.Toggle variant="outline-secondary" id="account-dropdown">
                    <User size={18} className="me-1" />
                    <span className="d-none d-lg-inline">Account</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu align="end">
                    <Dropdown.Item href="/login">Login</Dropdown.Item>
                    <Dropdown.Item href="/register">Sign Up</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="/account">My Account</Dropdown.Item>
                    <Dropdown.Item href="/orders">My Orders</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                
                {/* Cart */}
                <Button variant="outline-secondary" className="position-relative" href="/cart">
                  <ShoppingCart size={18} className="me-1" />
                  <span className="d-none d-lg-inline">Cart</span>
                  {cartItemCount > 0 && (
                    <Badge bg="danger" className="position-absolute top-0 start-100 translate-middle rounded-pill">
                      {Math.min(cartItemCount, 99)}
                    </Badge>
                  )}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <Container>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="mainNavbar">
            <Nav className="me-auto">
              <Nav.Link 
                href="/" 
                className="me-3 fw-bold"
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/', { scroll: false });
                }}
              >
                All Departments <ChevronDown size={16} className="ms-1" />
              </Nav.Link>
              <Nav.Link 
                href="/" 
                className="me-3" 
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/', { scroll: false });
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                href="/stores" 
                className="me-3"
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/stores', { scroll: false });
                }}
              >
                Stores
              </Nav.Link>
              <Nav.Link 
                href="/mega-menu" 
                className="me-3"
                onClick={(e) => {
                  e.preventDefault();
                  router.push('/mega-menu', { scroll: false });
                }}
              >
                Mega Menu <ChevronDown size={16} className="ms-1" />
              </Nav.Link>
              <Nav.Link href="/dashboard" className="me-3">Dashboard</Nav.Link>
              <Nav.Link href="/docs" className="me-3">Docs</Nav.Link>
            </Nav>
          </div>
        </Container>
      </nav>
    </Fragment>
  );
};

export default GlobalHeader;
