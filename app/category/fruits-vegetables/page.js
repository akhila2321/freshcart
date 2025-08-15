'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Card, Breadcrumb } from 'react-bootstrap';
import { FaHome, FaChevronRight, FaShoppingCart, FaHeart, FaSearch, FaMapMarkerAlt, FaUser } from 'react-icons/fa';

// Subcategories data
const subcategories = [
  { 
    id: 'all', 
    name: 'All', 
    icon: '/images/category/all-categories.png',
    description: 'All fruits and vegetables'
  },
  { 
    id: 'fresh-vegetables', 
    name: 'Fresh Vegetables', 
    icon: '/images/category/fresh-vegetables.png',
    description: 'Fresh and organic vegetables'
  },
  { 
    id: 'fresh-fruits', 
    name: 'Fresh Fruits', 
    icon: '/images/category/fresh-fruits.png',
    description: 'Seasonal fresh fruits'
  },
  { 
    id: 'exotics', 
    name: 'Exotics & Premium', 
    icon: '/images/category/exotics-premium.png',
    description: 'Exotic and premium selections'
  },
  { 
    id: 'flowers-leaves', 
    name: 'Flowers & Leaves', 
    icon: '/images/category/flowers-leaves.png',
    description: 'Fresh edible flowers and leaves'
  },
  { 
    id: 'cuts-sprouts', 
    name: 'Cuts & Sprouts', 
    icon: '/images/category/cuts-sprouts.png',
    description: 'Fresh cuts and sprouts'
  },
];

// Sample products data
const sampleProducts = [
  { id: 1, name: 'Fresh Tomato', price: '₹45', unit: '1 kg', category: 'fresh-vegetables', image: '/images/products/tomato.jpg' },
  { id: 2, name: 'Apple', price: '₹120', unit: '500g', category: 'fresh-fruits', image: '/images/products/apple.jpg' },
  { id: 3, name: 'Avocado', price: '₹180', unit: '1 pc', category: 'exotics', image: '/images/products/avocado.jpg' },
  { id: 4, name: 'Spinach', price: '₹30', unit: '250g', category: 'flowers-leaves', image: '/images/products/spinach.jpg' },
  { id: 5, name: 'Bean Sprouts', price: '₹50', unit: '200g', category: 'cuts-sprouts', image: '/images/products/sprouts.jpg' },
  { id: 6, name: 'Carrot', price: '₹40', unit: '1 kg', category: 'fresh-vegetables', image: '/images/products/carrot.jpg' },
];

// Header Component
const Header = () => (
  <header className="bg-white shadow-sm sticky-top">
    <Container>
      <Row className="align-items-center py-2">
        <Col xs={3} md={2}>
          <Link href="/" className="text-decoration-none">
            <h3 className="text-primary mb-0">FreshCart</h3>
          </Link>
        </Col>
        <Col xs={9} md={6} className="d-flex align-items-center">
          <div className="input-group">
            <input 
              type="text" 
              className="form-control border-end-0" 
              placeholder="Search for products..."
            />
            <button className="btn btn-outline-secondary border-start-0 bg-white" type="button">
              <FaSearch />
            </button>
          </div>
        </Col>
        <Col md={4} className="d-none d-md-flex justify-content-end gap-3">
          <button className="btn btn-link text-dark text-decoration-none">
            <FaMapMarkerAlt className="me-1" />
            <span className="d-none d-lg-inline">Select Location</span>
          </button>
          <button className="btn btn-link text-dark text-decoration-none">
            <FaHeart className="me-1" />
            <span className="d-none d-lg-inline">Wishlist</span>
          </button>
          <button className="btn btn-link text-dark text-decoration-none">
            <FaShoppingCart className="me-1" />
            <span className="d-none d-lg-inline">Cart</span>
          </button>
          <button className="btn btn-link text-dark text-decoration-none">
            <FaUser className="me-1" />
            <span className="d-none d-lg-inline">Login</span>
          </button>
        </Col>
      </Row>
    </Container>
  </header>
);

export default function FruitsVegetablesPage() {
  const [activeSubcategory, setActiveSubcategory] = useState('all');
  
  // Filter products based on active subcategory
  const filteredProducts = activeSubcategory === 'all' 
    ? sampleProducts 
    : sampleProducts.filter(product => product.category === activeSubcategory);

  // Get current subcategory name for breadcrumb
  const currentSubcategory = subcategories.find(cat => cat.id === activeSubcategory) || { name: 'All' };

  return (
    <div>
      <Header />
      <div className="py-4 bg-light">
        <Container>
          {/* Breadcrumb Navigation */}
          <Breadcrumb className="mb-4">
            <Breadcrumb.Item linkAs={Link} href="/" className="text-decoration-none">
              <FaHome className="me-1" /> Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Fruits & Vegetables</Breadcrumb.Item>
            {activeSubcategory !== 'all' && (
              <Breadcrumb.Item active>{currentSubcategory.name}</Breadcrumb.Item>
            )}
          </Breadcrumb>

          <Row>
            {/* Left Sidebar */}
            <Col lg={3} className="mb-4">
              <Card className="border-0 shadow-sm">
                <Card.Body>
                  <h5 className="mb-4">Categories</h5>
                  <div className="d-flex flex-column gap-2">
                    {subcategories.map((subcategory) => (
                      <button
                        key={subcategory.id}
                        className={`btn btn-link text-start text-decoration-none p-3 rounded-3 d-flex align-items-center ${
                          activeSubcategory === subcategory.id 
                            ? 'bg-primary text-white' 
                            : 'text-dark bg-light-hover'
                        }`}
                        onClick={() => setActiveSubcategory(subcategory.id)}
                      >
                        <div className="me-3" style={{ width: '32px' }}>
                          <div className="rounded-circle overflow-hidden" style={{ width: '32px', height: '32px' }}>
                            <img 
                              src={subcategory.icon} 
                              alt={subcategory.name}
                              className="w-100 h-100 object-fit-cover"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/images/placeholder.png';
                              }}
                            />
                          </div>
                        </div>
                        <span className="fw-medium">{subcategory.name}</span>
                      </button>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Main Content */}
            <Col lg={9}>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="mb-0">
                  {activeSubcategory === 'all' 
                    ? 'All Fruits & Vegetables' 
                    : currentSubcategory.name}
                </h2>
                <div className="text-muted">
                  {filteredProducts.length} items
                </div>
              </div>
              
              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <Row xs={2} md={3} className="g-4">
                  {filteredProducts.map((product) => (
                    <Col key={product.id}>
                      <Card className="h-100 border-0 shadow-sm-hover transition-all">
                        <div className="ratio ratio-1x1">
                          <div className="p-3 d-flex align-items-center justify-content-center">
                            <img 
                              src={product.image} 
                              className="img-fluid" 
                              alt={product.name}
                              style={{ maxHeight: '150px', objectFit: 'contain' }}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/images/placeholder.png';
                              }}
                            />
                          </div>
                        </div>
                        <Card.Body className="text-center pt-0">
                          <h6 className="card-title mb-1 text-truncate">{product.name}</h6>
                          <p className="text-muted small mb-2">{product.unit}</p>
                          <p className="fw-bold text-primary mb-0">{product.price}</p>
                          <button className="btn btn-sm btn-primary w-100 mt-3">
                            Add to Cart
                          </button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              ) : (
                <div className="text-center py-5">
                  <h4>No products found in this category</h4>
                  <p className="text-muted">Please check back later or try another category</p>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
