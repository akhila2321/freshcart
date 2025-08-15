'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Container, Row, Col, Image, Button, Alert } from 'react-bootstrap';
import { ArrowLeft, Home, HelpCircle } from 'react-feather';
import { useSelector } from 'react-redux';

export const metadata = {
  title: 'Page Not Found | FreshCart',
  description: 'The page you are looking for does not exist or has been moved.',
};

const NotFound = () => {
  const router = useRouter();
  const logo = useSelector((state) => state.app.logo);
  
  // Log 404 errors to analytics in production
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // Here you would typically log the 404 error to your analytics service
      console.log('404 - Page not found:', window.location.pathname);
    }
  }, []);

  return (
    <section className="bg-light min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col xl={10} lg={11} className="py-8 py-xl-0">
            <div className="text-center mb-6">
              <Link href="/" className="d-inline-block mb-4">
                <Image 
                  src={logo || '/images/logo/freshcart-logo.svg'} 
                  alt="FreshCart" 
                  height="40"
                  className="img-fluid"
                />
              </Link>
              
              <h1 className="display-4 fw-bold text-primary mb-3">404</h1>
              <h2 className="h3 mb-4">Oops! Page not found</h2>
              
              <p className="lead text-muted mb-5">
                The page you are looking for might have been removed, had its name changed,
                or is temporarily unavailable.
              </p>
              
              <div className="d-flex justify-content-center gap-3">
                <Button 
                  variant="primary" 
                  onClick={() => router.back()}
                  className="d-flex align-items-center gap-2"
                >
                  <ArrowLeft size={16} />
                  Go Back
                </Button>
                
                <Button 
                  variant="outline-primary" 
                  href="/" 
                  as={Link}
                  className="d-flex align-items-center gap-2"
                >
                  <Home size={16} />
                  Back to Home
                </Button>
              </div>
              
              <div className="mt-5 pt-4 border-top">
                <p className="text-muted mb-3">Still can't find what you're looking for?</p>
                <Button 
                  variant="outline-secondary" 
                  href="/help" 
                  as={Link}
                  className="d-inline-flex align-items-center gap-2"
                >
                  <HelpCircle size={16} />
                  Visit Help Center
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NotFound;
