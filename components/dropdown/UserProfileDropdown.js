import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from "@/hooks/useAuth";
import { Dropdown, Image } from 'react-bootstrap';
import { Person, BoxSeam, Gift, ArrowReturnLeft, GeoAlt, 
          Star, Bell, InfoCircle, Lightbulb, BoxArrowRight } from 'react-bootstrap-icons';

const UserProfileDropdown = () => {
  const { user, profile, logout } = useAuth();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);

  // User data from auth state
  const userData = {
    name: user?.name || `${user?.firstName || ''} ${user?.lastName || ''}`.trim() || 'User',
    email: user?.email || '',
    walletBalance: profile?.walletBalance || 0,
    notifications: profile?.notifications?.length || 0,
    orders: profile?.recentOrders?.length || 0,
    savedAddresses: profile?.savedAddresses?.length || 0
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShow(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (!user) return null;

  return (
    <div className="position-relative" ref={dropdownRef}>
      <button 
        className="btn border-0 bg-transparent p-0"
        onClick={() => setShow(!show)}
        aria-expanded={show}
        aria-label="User profile menu"
      >
        <div className="avatar avatar-md avatar-indicators">
          <Image
            alt="avatar"
            src={user.avatar || '/images/avatar/avatar-1.jpg'}
            className="rounded-circle"
            width={40}
            height={40}
          />
        </div>
      </button>

      <Dropdown.Menu
        show={show}
        className="shadow border-0 p-3 dropdown-menu-end"
        style={{ minWidth: '280px', display: show ? 'block' : 'none' }}
      >
        {/* User Info */}
        <div className="px-3 py-2 border-bottom">
          <h6 className="mb-1 fw-bold">{userData.name}</h6>
          <p className="mb-0 text-muted small">{userData.email}</p>
          {userData.walletBalance !== undefined && (
            <div className="mt-2 d-flex align-items-center">
              <span className="fw-medium">Wallet:</span>
              <span className="ms-2 text-success fw-bold">
                ${profile.walletBalance.toFixed(2)}
              </span>
            </div>
          )}
        </div>

        <div className="px-2 py-2">
          {/* Quick Access */}
          <div className="mb-3">
            <h6 className="dropdown-header fw-bold text-uppercase small">Quick Access</h6>
            <Link href="/account/orders" passHref>
              <Dropdown.Item className="d-flex align-items-center py-2">
                <BoxSeam className="me-2" size={18} />
                Your Orders
              </Dropdown.Item>
            </Link>
            <Link href="/help" passHref>
              <Dropdown.Item className="d-flex align-items-center py-2">
                <InfoCircle className="me-2" size={18} />
                Help & Support
              </Dropdown.Item>
            </Link>
          </div>

          {/* Your Information */}
          <div className="mb-3">
            <h6 className="dropdown-header fw-bold text-uppercase small">Your Information</h6>
            <Link href="/account/gift-cards" passHref>
              <Dropdown.Item className="d-flex align-items-center py-2">
                <Gift className="me-2" size={18} />
                E-Gift Cards
              </Dropdown.Item>
            </Link>
            <Link href="/account/refunds" passHref>
              <Dropdown.Item className="d-flex align-items-center py-2">
                <ArrowReturnLeft className="me-2" size={18} />
                Refunds
              </Dropdown.Item>
            </Link>
            <Link href="/account/addresses" passHref>
              <Dropdown.Item className="d-flex align-items-center py-2">
                <GeoAlt className="me-2" size={18} />
                Saved Addresses
              </Dropdown.Item>
            </Link>
            <Link href="/account/rewards" passHref>
              <Dropdown.Item className="d-flex align-items-center py-2">
                <Star className="me-2" size={18} />
                Rewards
              </Dropdown.Item>
            </Link>
            <Link href="/account/payment-methods" passHref>
              <Dropdown.Item className="d-flex align-items-center py-2">
                <i className="fe fe-credit-card me-2"></i>
                Payment Management
              </Dropdown.Item>
            </Link>
          </div>

          {/* Other Links */}
          <div className="mb-3">
            <h6 className="dropdown-header fw-bold text-uppercase small">Other</h6>
            <Link href="/suggest-product" passHref>
              <Dropdown.Item className="d-flex align-items-center py-2">
                <Lightbulb className="me-2" size={18} />
                Suggest Products
              </Dropdown.Item>
            </Link>
            <Link href="/notifications" passHref>
              <Dropdown.Item className="d-flex align-items-center py-2">
                <Bell className="me-2" size={18} />
                Notifications
                {profile.notifications?.length > 0 && (
                  <span className="badge bg-danger rounded-pill ms-auto">
                    {profile.notifications.length}
                  </span>
                )}
              </Dropdown.Item>
            </Link>
          </div>

          {/* Logout */}
          <div className="border-top pt-2">
            <Dropdown.Item 
              as="button"
              className="d-flex align-items-center text-danger py-2"
              onClick={handleLogout}
            >
              <BoxArrowRight className="me-2" size={18} />
              Log Out
            </Dropdown.Item>
          </div>
        </div>
      </Dropdown.Menu>
    </div>
  );
};

export default UserProfileDropdown;
