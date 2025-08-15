import { Component } from 'react';
import { Alert, Button, Container } from 'react-bootstrap';
import { useRouter } from 'next/router';

class AuthErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error('Auth Error Boundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  render() {
    const { hasError, error } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      if (fallback) {
        return fallback(error, this.handleReset);
      }

      return (
        <Container className="py-5">
          <Alert variant="danger">
            <Alert.Heading>Authentication Error</Alert.Heading>
            <p>
              {error?.message || 'An authentication error occurred. Please try again.'}
            </p>
            <div className="d-flex justify-content-end">
              <Button 
                variant="outline-danger" 
                onClick={this.handleReset}
                className="me-2"
              >
                Try Again
              </Button>
              <Button 
                variant="primary" 
                href="/signin"
                as="a"
              >
                Go to Sign In
              </Button>
            </div>
          </Alert>
        </Container>
      );
    }

    return children;
  }
}

// Wrapper component to use hooks
const AuthErrorBoundaryWrapper = (props) => {
  const router = useRouter();
  
  const handleReset = () => {
    // Clear any auth-related local storage
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
    // Optionally refresh the page or redirect
    router.push('/signin');
  };

  return <AuthErrorBoundary onReset={handleReset} {...props} />;
};

export default AuthErrorBoundaryWrapper;
