'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Button, Alert } from 'react-bootstrap';
import { ArrowLeft } from 'react-bootstrap-icons';

function Error({ error, reset }) {
  const router = useRouter();
  
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error caught by error boundary:', error);
  }, [error]);

  const getErrorMessage = (statusCode) => {
    switch (statusCode) {
      case 401:
        return 'You are not authorized to view this page. Please sign in.';
      case 403:
        return 'You do not have permission to access this page.';
      case 404:
        return 'The page you are looking for does not exist.';
      case 500:
        return 'An internal server error occurred. Please try again later.';
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  };

  const statusCode = error.statusCode || 500;
  const errorMessage = error.message || getErrorMessage(statusCode);

  return (
    <Container className="py-5 text-center">
      <div className="py-5">
        <h1 className="display-1 fw-bold text-danger">{statusCode}</h1>
        <h2 className="h4 mb-4">
          {statusCode === 500 ? 'Internal Server Error' : 'Something went wrong'}
        </h2>
        
        <Alert variant="danger" className="mb-4">
          <p className="mb-0">{errorMessage}</p>
        </Alert>
        
        <div className="d-flex justify-content-center gap-3">
          <Button 
            variant="outline-primary" 
            onClick={() => reset()}
            className="d-flex align-items-center gap-2"
          >
            Try Again
          </Button>
          
          <Button 
            variant="primary" 
            onClick={() => router.push('/')}
            className="d-flex align-items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Button>
        </div>
        
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-4 p-3 bg-light rounded text-start">
            <h5 className="text-muted mb-3">Error Details:</h5>
            <pre className="bg-dark text-white p-3 rounded" style={{ fontSize: '0.8rem' }}>
              {error.stack || JSON.stringify(error, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Error;
