'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Person, Box, ClockHistory, Heart, Gear } from 'react-bootstrap-icons';

export default function DashboardPage() {
  const { user, isAuthenticated, loading, logout } = useAuth();
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/signin?redirect=/account/dashboard');
    }
  }, [isAuthenticated, loading, router]);

  if (loading || !isAuthenticated) {
    return (
      <Container className="py-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading your dashboard...</p>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h1 className="h2">Welcome back, {user?.name?.split(' ')[0] || 'User'}!</h1>
          <p className="text-muted">Here's what's happening with your account today.</p>
        </Col>
      </Row>

      <Row className="g-4 mb-4">
        <Col md={6} lg={3}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="text-center">
              <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '64px', height: '64px' }}>
                <Person size={24} className="text-primary" />
              </div>
              <h3 className="h5">My Profile</h3>
              <p className="text-muted small">View and update your personal information</p>
              <Button variant="outline-primary" size="sm" onClick={() => router.push('/account/profile')}>
                View Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="text-center">
              <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '64px', height: '64px' }}>
                <Box size={24} className="text-primary" />
              </div>
              <h3 className="h5">My Orders</h3>
              <p className="text-muted small">Track and manage your orders</p>
              <Button variant="outline-primary" size="sm" onClick={() => router.push('/account/orders')}>
                View Orders
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="text-center">
              <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '64px', height: '64px' }}>
                <Heart size={24} className="text-primary" />
              </div>
              <h3 className="h5">Wishlist</h3>
              <p className="text-muted small">Your saved items</p>
              <Button variant="outline-primary" size="sm" onClick={() => router.push('/account/wishlist')}>
                View Wishlist
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="text-center">
              <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '64px', height: '64px' }}>
                <Gear size={24} className="text-primary" />
              </div>
              <h3 className="h5">Account Settings</h3>
              <p className="text-muted small">Manage your account preferences</p>
              <Button variant="outline-primary" size="sm" onClick={() => router.push('/account/settings')}>
                Settings
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <Card className="border-0 shadow-sm">
            <Card.Header className="bg-white border-bottom">
              <h2 className="h5 mb-0">Recent Activity</h2>
            </Card.Header>
            <Card.Body>
              <div className="text-center py-4">
                <ClockHistory size={32} className="text-muted mb-2" />
                <p className="text-muted">Your recent activity will appear here</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
