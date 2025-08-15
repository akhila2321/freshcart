'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Person, BoxArrowRight, Gear, Heart, Envelope, Gift, Wallet, GeoAlt, Bell, QuestionCircle } from 'react-bootstrap-icons';

export default function UserMenu() {
  const { user, signout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await signout();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!user) return null;

  return (
    <div className="position-relative" ref={menuRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-link text-dark text-decoration-none p-0 d-flex align-items-center"
        aria-expanded={isOpen}
        aria-label="Account menu"
      >
        <div className="rounded-circle bg-light d-flex align-items-center justify-content-center" 
             style={{ width: '36px', height: '36px' }}>
          <Person size={20} />
        </div>
        <span className="ms-2 d-none d-lg-inline">
          {user.name?.split(' ')[0] || 'Account'}
        </span>
      </button>

      {isOpen && (
        <div className="position-absolute end-0 mt-2 bg-white rounded shadow-lg" 
             style={{ width: '280px', zIndex: 1000 }}>
          <div className="p-3 border-bottom">
            <p className="mb-1 fw-bold">{user.name}</p>
            <p className="text-muted small mb-0">{user.email}</p>
          </div>
          
          <div className="p-2" style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <h6 className="px-3 py-2 text-uppercase small text-muted">Account</h6>
            
            <Link href="/account/orders" className="dropdown-item py-2">
              <BoxArrowRight className="me-2" size={16} />
              Your Orders
            </Link>
            
            <Link href="/account/wishlist" className="dropdown-item py-2">
              <Heart className="me-2" size={16} />
              Wishlist
            </Link>
            
            <Link href="/account/addresses" className="dropdown-item py-2">
              <GeoAlt className="me-2" size={16} />
              Saved Addresses
            </Link>
            
            <Link href="/account/wallet" className="dropdown-item py-2">
              <Wallet className="me-2" size={16} />
              Wallet & Payments
            </Link>
            
            <Link href="/account/notifications" className="dropdown-item py-2">
              <Bell className="me-2" size={16} />
              Notifications
            </Link>
            
            <h6 className="px-3 pt-3 pb-2 text-uppercase small text-muted">Support</h6>
            
            <Link href="/help" className="dropdown-item py-2">
              <QuestionCircle className="me-2" size={16} />
              Help & Support
            </Link>
            
            <Link href="/contact" className="dropdown-item py-2">
              <Envelope className="me-2" size={16} />
              Contact Us
            </Link>
            
            <Link href="/suggestions" className="dropdown-item py-2">
              <Gift className="me-2" size={16} />
              Suggest Products
            </Link>
            
            <Link href="/account/settings" className="dropdown-item py-2">
              <Gear className="me-2" size={16} />
              Account Settings
            </Link>
          </div>
          
          <div className="p-3 border-top">
            <button 
              onClick={handleSignOut}
              className="btn btn-outline-danger w-100"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
