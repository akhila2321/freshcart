'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Card, Breadcrumb } from 'react-bootstrap';
import { FaHome, FaShoppingCart, FaHeart, FaSearch, FaUser } from 'react-icons/fa';

// Subcategories data
const subcategories = [
  { 
    id: 'all', 
    name: 'All', 
    icon: '/images/category/all-categories.png',
    description: 'All cleaning essentials'
  },
  { 
    id: 'repellents', 
    name: 'Repellents', 
    icon: '/images/category/repellents.png',
    description: 'Insect and mosquito repellents'
  },
  { 
    id: 'detergent-powder-bars', 
    name: 'Detergent Powder & Bars', 
    icon: '/images/category/detergents.png',
    description: 'Laundry detergents and washing bars'
  },
  { 
    id: 'liquid-detergents', 
    name: 'Liquid Detergents', 
    icon: '/images/category/liquid-detergents.png',
    description: 'Liquid laundry detergents and fabric softeners'
  },
  { 
    id: 'dishwash-gels-bars', 
    name: 'Dishwash Gels & Bars', 
    icon: '/images/category/dishwash.png',
    description: 'Dishwashing liquids and bars'
  },
  { 
    id: 'floor-surface-cleaners', 
    name: 'Floor & Surface Cleaners', 
    icon: '/images/category/cleaners.png',
    description: 'All-purpose and specialized cleaners'
  },
  { 
    id: 'toilet-bathroom', 
    name: 'Toilet & Bathroom', 
    icon: '/images/category/toilet-cleaners.png',
    description: 'Toilet and bathroom cleaning products'
  },
  { 
    id: 'fresheners', 
    name: 'Fresheners', 
    icon: '/images/category/fresheners.png',
    description: 'Air and fabric fresheners'
  },
];

// Sample products data
const sampleProducts = [
  { id: 1, name: 'Mosquito Repellent', price: '₹120', unit: '45g', category: 'repellents', image: '/images/products/mosquito-repellent.jpg' },
  { id: 2, name: 'Detergent Powder', price: '₹200', unit: '1kg', category: 'detergent-powder-bars', image: '/images/products/detergent-powder.jpg' },
  { id: 3, name: 'Liquid Detergent', price: '₹350', unit: '2L', category: 'liquid-detergents', image: '/images/products/liquid-detergent.jpg' },
  { id: 4, name: 'Dishwash Bar', price: '₹20', unit: '150g', category: 'dishwash-gels-bars', image: '/images/products/dishwash-bar.jpg' },
  { id: 5, name: 'Floor Cleaner', price: '₹180', unit: '1L', category: 'floor-surface-cleaners', image: '/images/products/floor-cleaner.jpg' },
  { id: 6, name: 'Toilet Cleaner', price: '₹90', unit: '500ml', category: 'toilet-bathroom', image: '/images/products/toilet-cleaner.jpg' },
  { id: 7, name: 'Room Freshener', price: '₹140', unit: '200ml', category: 'fresheners', image: '/images/products/room-freshener.jpg' },
  { id: 8, name: 'Dishwash Liquid', price: '₹120', unit: '500ml', category: 'dishwash-gels-bars', image: '/images/products/dishwash-liquid.jpg' },
  { id: 9, name: 'Fabric Softener', price: '₹220', unit: '1L', category: 'liquid-detergents', image: '/images/products/fabric-softener.jpg' },
  { id: 10, name: 'Glass Cleaner', price: '₹150', unit: '500ml', category: 'floor-surface-cleaners', image: '/images/products/glass-cleaner.jpg' },
];

// Header Component
const Header = () => (
  <header className="border-bottom">
    <Container>
      <div className="d-flex justify-content-between align-items-center py-3">
        <Link href="/" className="text-decoration-none">
          <h4 className="mb-0 text-primary fw-bold">FreshCart</h4>
        </Link>
        <div className="d-flex align-items-center gap-3">
          <div className="position-relative d-none d-md-block">
            <input
              type="text"
              className="form-control rounded-pill ps-4 pe-5"
              placeholder="Search for products..."
              style={{ minWidth: '300px' }}
            />
            <FaSearch className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted" />
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-primary rounded-circle p-2">
              <FaUser />
            </button>
            <button className="btn btn-outline-primary rounded-circle p-2 position-relative">
              <FaHeart />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
              </span>
            </button>
            <button className="btn btn-outline-primary rounded-circle p-2 position-relative">
              <FaShoppingCart />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </Container>
  </header>
);

export default function CleaningEssentialsPage() {
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
            <Breadcrumb.Item active>Cleaning Essentials</Breadcrumb.Item>
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
                    ? 'All Cleaning Essentials' 
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
