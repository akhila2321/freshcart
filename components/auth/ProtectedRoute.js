'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import Spinner from 'react-bootstrap/Spinner';

export default function ProtectedRoute({ 
  children, 
  requiredRole,
  loadingComponent = (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { isAuthenticated, loading, user } = useAuth();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || loading) return;
    
    const checkAuth = () => {
      if (!isAuthenticated) {
        // Redirect to login if not authenticated
        const redirectUrl = `/signin?redirect=${encodeURIComponent(pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''))}`;
        router.push(redirectUrl);
      } else if (requiredRole && user?.role !== requiredRole) {
        // Redirect to unauthorized page if role doesn't match
        router.push('/unauthorized');
      } else {
        // User is authenticated and authorized
        setIsAuthorized(true);
      }
    };
    
    checkAuth();
  }, [isAuthenticated, loading, requiredRole, router, user?.role, isClient, pathname, searchParams]);

  if (loading || !isClient) {
    return loadingComponent;
  }

  return isAuthorized ? children : null;
}

// Higher Order Component for protecting pages
export function withAuth(Component, options = {}) {
  return function WithAuth(props) {
    return (
      <ProtectedRoute requiredRole={options.requiredRole} loadingComponent={options.loadingComponent}>
        <Component {...props} />
      </ProtectedRoute>
    );
  };
}
