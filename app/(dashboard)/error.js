'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Button, Alert, Row, Col } from 'react-bootstrap';
import { ArrowLeft, Home, AlertCircle } from 'react-feather';
import Link from 'next/link';

function DashboardError({ error, reset }) {
  const router = useRouter();
  
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Dashboard Error:', error);
  }, [error]);

  const getErrorMessage = (statusCode) => {
    switch (statusCode) {
      case 401:
        return 'Your session has expired. Please sign in again to continue.';
      case 403:
        return 'You do not have permission to access this dashboard.';
      case 404:
        return 'The requested resource was not found.';
      case 500:
        return 'An internal server error occurred. Our team has been notified.';
      default:
        return 'An unexpected error occurred. Please try again later.';
    }
  };

  const statusCode = error.statusCode || 500;
  const errorMessage = error.message || getErrorMessage(statusCode);

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <div className="mb-4">
              <AlertCircle size={64} className="text-danger" />
            </div>
            
            <h1 className="display-5 fw-bold text-danger mb-3">
              {statusCode} - {statusCode === 500 ? 'Server Error' : 'Error'}
            </h1>
            
            <div className="mb-5">
              <p className="lead mb-4">{errorMessage}</p>
              
              {statusCode === 401 ? (
                <Alert variant="warning" className="d-inline-block">
                  You will be redirected to the login page...
                </Alert>
              ) : null}
            </div>
            
            <div className="d-flex justify-content-center gap-3">
              <Button 
                variant="outline-primary" 
                onClick={() => reset()}
                className="d-flex align-items-center gap-2"
                disabled={statusCode === 401}
              >
                Try Again
              </Button>
              
              {statusCode === 401 ? (
                <Button 
                  variant="primary" 
                  href="/signin" 
                  as={Link}
                  className="d-flex align-items-center gap-2"
                >
                  Go to Sign In
                </Button>
              ) : (
                <Button 
                  variant="primary" 
                  href="/account/dashboard" 
                  as={Link}
                  className="d-flex align-items-center gap-2"
                >
                  <Home size={16} />
                  Back to Dashboard
                </Button>
              )}
              
              <Button 
                variant="outline-secondary" 
                href="/" 
                as={Link}
                className="d-flex align-items-center gap-2"
              >
                <Home size={16} />
                Back to Home
              </Button>
            </div>
            
            {process.env.NODE_ENV === 'development' && (
              <div className="mt-5 p-3 bg-dark text-white rounded text-start">
                <h5 className="mb-3">Error Details:</h5>
                <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                  {error.stack || JSON.stringify(error, null, 2)}
                </pre>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DashboardError;
