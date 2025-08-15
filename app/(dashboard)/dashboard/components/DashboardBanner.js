// import node module libraries
import { Row, Col, Card, Button, Badge } from "react-bootstrap";
import { useAuth } from '@/context/AuthContext';
import { PersonCircle } from 'react-bootstrap-icons';

const DashboardBanner = () => {
  const { user } = useAuth();
  
  // Get user's first name or default to 'there'
  const firstName = user?.name?.split(' ')[0] || 'there';
  const userSince = new Date(user?.createdAt || new Date()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });
  return (
    <Row className="mb-8">
      <Col md={12}>
        <Card
          bg="light"
          className="border-0 rounded-4"
          style={{
            backgroundImage: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
            border: '1px solid #dee2e6',
          }}
        >
          <Card.Body className="p-lg-4 p-3">
            <Row className="align-items-center">
              <Col md={8}>
                <h1 className="mb-3">Welcome back, {firstName}! 👋</h1>
                <p className="lead mb-4">
                  {user?.email ? `You're logged in as ${user.email}` : 'Manage your account and track your orders.'}
                </p>
                <div className="d-flex gap-2 mb-3">
                  <Button variant="primary" href="/account/orders">
                    View Orders
                  </Button>
                  <Button variant="outline-primary" href="/account/settings">
                    Account Settings
                  </Button>
                </div>
                <div className="d-flex align-items-center text-muted small">
                  <span>Member since {userSince}</span>
                  {user?.role === 'admin' && (
                    <Badge bg="warning" className="ms-2">
                      Admin
                    </Badge>
                  )}
                </div>
              </Col>
              <Col md={4} className="text-center d-none d-md-block">
                <div className="bg-white rounded-circle p-3 d-inline-block">
                  {user?.avatar ? (
                    <img 
                      src={user.avatar} 
                      alt={user.name} 
                      className="rounded-circle" 
                      style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                    />
                  ) : (
                    <PersonCircle style={{ fontSize: '120px', color: '#e9ecef' }} />
                  )}
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardBanner;
