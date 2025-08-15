// import node module libraries
import React, { useState } from "react";
import { Navbar, Container, Form, ListGroup, Dropdown, Image, Nav } from "react-bootstrap";
import { 
  TextIndentRight, 
  PersonCircle, 
  Gear, 
  BoxSeam, 
  Heart, 
  CreditCard, 
  Truck, 
  Gift, 
  Bell, 
  QuestionCircle,
  BoxArrowRight
} from "react-bootstrap-icons";
import Link from "next/link";
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

// import sub components
import DashboardNotification from "./DashboardNotification";
import AdminMenu from "./AdminMenu";

const DashboardTopbar = ({ openMenu, user }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { logout } = useAuth();
  const router = useRouter();
  
  const handleLogout = () => {
    logout();
    router.push('/');
  };
  return (
    <Navbar expand="lg" className="navbar-glass">
      <Container fluid>
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="d-flex align-items-center">
            <TextIndentRight
              size={32}
              className="text-inherit d-block d-xl-none me-4"
              onClick={() => openMenu()}
            />
            <Form.Control type="search" placeholder="Search" />
          </div>

          <div className="d-flex align-items-center gap-3">
            <DashboardNotification />
            
            {/* User Profile Dropdown */}
            <Dropdown show={showDropdown} onToggle={setShowDropdown} align="end">
              <Dropdown.Toggle 
                as="div" 
                className="d-flex align-items-center text-decoration-none cursor-pointer"
                style={{ outline: 'none' }}
              >
                <div className="d-flex align-items-center">
                  {user?.avatar ? (
                    <Image 
                      src={user.avatar} 
                      alt={user.name} 
                      roundedCircle 
                      width={36} 
                      height={36} 
                      className="object-fit-cover"
                    />
                  ) : (
                    <div className="rounded-circle bg-light d-flex align-items-center justify-content-center" 
                         style={{ width: '36px', height: '36px' }}>
                      <PersonCircle size={24} className="text-muted" />
                    </div>
                  )}
                  <span className="ms-2 d-none d-md-inline text-dark">
                    {user?.name?.split(' ')[0] || 'Account'}
                  </span>
                </div>
              </Dropdown.Toggle>
              
              <Dropdown.Menu className="dropdown-menu-end border-0 shadow-sm" style={{ minWidth: '240px' }}>
                <div className="px-3 py-2 border-bottom">
                  <div className="fw-semibold">{user?.name || 'User'}</div>
                  <div className="small text-muted">{user?.email || ''}</div>
                </div>
                
                <Dropdown.Divider />
                
                <Link href="/account/dashboard" passHref>
                  <Dropdown.Item as="div" className="d-flex align-items-center py-2">
                    <PersonCircle className="me-2" />
                    <span>My Profile</span>
                  </Dropdown.Item>
                </Link>
                
                <Link href="/account/orders" passHref>
                  <Dropdown.Item as="div" className="d-flex align-items-center py-2">
                    <BoxSeam className="me-2" />
                    <span>My Orders</span>
                  </Dropdown.Item>
                </Link>
                
                <Link href="/account/wishlist" passHref>
                  <Dropdown.Item as="div" className="d-flex align-items-center py-2">
                    <Heart className="me-2" />
                    <span>Wishlist</span>
                  </Dropdown.Item>
                </Link>
                
                <Link href="/account/addresses" passHref>
                  <Dropdown.Item as="div" className="d-flex align-items-center py-2">
                    <Truck className="me-2" />
                    <span>Saved Addresses</span>
                  </Dropdown.Item>
                </Link>
                
                <Link href="/account/payment-methods" passHref>
                  <Dropdown.Item as="div" className="d-flex align-items-center py-2">
                    <CreditCard className="me-2" />
                    <span>Payment Methods</span>
                  </Dropdown.Item>
                </Link>
                
                {user?.role === 'admin' && (
                  <Link href="/admin/dashboard" passHref>
                    <Dropdown.Item as="div" className="d-flex align-items-center py-2 text-danger">
                      <Gear className="me-2" />
                      <span>Admin Dashboard</span>
                    </Dropdown.Item>
                  </Link>
                )}
                
                <Dropdown.Divider />
                
                <Dropdown.Item 
                  as="button" 
                  className="d-flex align-items-center py-2 text-danger"
                  onClick={handleLogout}
                >
                  <BoxArrowRight className="me-2" />
                  <span>Logout</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
            <AdminMenu />
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default DashboardTopbar;
