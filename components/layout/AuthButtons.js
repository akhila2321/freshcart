'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Button } from 'react-bootstrap';
import { Person, BoxArrowInRight, PersonPlus } from 'react-bootstrap-icons';

export default function AuthButtons() {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return (
      <div className="d-flex gap-2">
        <Button variant="outline-secondary" disabled>
          <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true" />
          Loading...
        </Button>
      </div>
    );
  }

  if (isAuthenticated) {
    return (
      <div className="d-flex align-items-center gap-2">
        <Button 
          variant="outline-primary" 
          onClick={() => router.push('/account/dashboard')}
          className="d-flex align-items-center gap-1"
        >
          <Person className="me-1" />
          My Account
        </Button>
      </div>
    );
  }

  return (
    <div className="d-flex gap-2">
      <Link href="/signin" passHref>
        <Button variant="outline-primary" className="d-flex align-items-center gap-1">
          <BoxArrowInRight className="me-1" />
          Sign In
        </Button>
      </Link>
      <Link href="/signup" passHref>
        <Button variant="primary" className="d-flex align-items-center gap-1">
          <PersonPlus className="me-1" />
          Sign Up
        </Button>
      </Link>
    </div>
  );
}
