import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Spinner from 'react-bootstrap/Spinner';

export default function ProtectedRoute({ children, requiredRole }) {
  const router = useRouter();
  const { isAuthenticated, loading, user } = useAuth();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        // Redirect to login if not authenticated
        router.push(`/signin?redirect=${encodeURIComponent(router.asPath)}`);
      } else if (requiredRole && user?.role !== requiredRole) {
        // Redirect to unauthorized page if role doesn't match
        router.push('/unauthorized');
      } else {
        // User is authenticated and authorized
        setIsAuthorized(true);
      }
    }
  }, [isAuthenticated, loading, requiredRole, router, user?.role]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return isAuthorized ? children : null;
}

export function withAuth(Component, requiredRole) {
  return function WithAuth(props) {
    return (
      <ProtectedRoute requiredRole={requiredRole}>
        <Component {...props} />
      </ProtectedRoute>
    );
  };
}
