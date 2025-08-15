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
    description: 'All masala and dry fruits products'
  },
  { 
    id: 'powders-pastes', 
    name: 'Powders & Pastes', 
    icon: '/images/category/spice-powder.png',
    description: 'Spice powders and pastes'
  },
  { 
    id: 'dry-fruits-nuts', 
    name: 'Dry Fruits & Nuts', 
    icon: '/images/category/dry-fruits.png',
    description: 'Premium dry fruits and nuts'
  },
  { 
    id: 'dates-seeds', 
    name: 'Dates & Seeds', 
    icon: '/images/category/dates.png',
    description: 'Fresh dates and healthy seeds'
  },
  { 
    id: 'whole-spices', 
    name: 'Whole Spices & Seasonings', 
    icon: '/images/category/whole-spices.png',
    description: 'Aromatic whole spices'
  },
  { 
    id: 'salt', 
    name: 'Salt', 
    icon: '/images/category/salt.png',
    description: 'Different types of salt'
  },
  { 
    id: 'sugar-jaggery', 
    name: 'Sugar & Jaggery', 
    icon: '/images/category/sugar-jaggery.png',
    description: 'Sweeteners and jaggery'
  },
];

// Sample products data
const sampleProducts = [
  { id: 1, name: 'Red Chilli Powder', price: '₹120', unit: '200g', category: 'powders-pastes', image: '/images/products/chilli-powder.jpg' },
  { id: 2, name: 'Almonds', price: '₹900', unit: '500g', category: 'dry-fruits-nuts', image: '/images/products/almonds.jpg' },
  { id: 3, name: 'Medjool Dates', price: '₹350', unit: '500g', category: 'dates-seeds', image: '/images/products/dates.jpg' },
  { id: 4, name: 'Cumin Seeds', price: '₹85', unit: '200g', category: 'whole-spices', image: '/images/products/cumin.jpg' },
  { id: 5, name: 'Black Salt', price: '₹45', unit: '200g', category: 'salt', image: '/images/products/black-salt.jpg' },
  { id: 6, name: 'Organic Jaggery', price: '₹120', unit: '500g', category: 'sugar-jaggery', image: '/images/products/jaggery.jpg' },
  { id: 7, name: 'Turmeric Powder', price: '₹95', unit: '200g', category: 'powders-pastes', image: '/images/products/turmeric.jpg' },
  { id: 8, name: 'Cashew Nuts', price: '₹950', unit: '500g', category: 'dry-fruits-nuts', image: '/images/products/cashews.jpg' },
  { id: 9, name: 'Pumpkin Seeds', price: '₹180', unit: '200g', category: 'dates-seeds', image: '/images/products/pumpkin-seeds.jpg' },
  { id: 10, name: 'Black Pepper', price: '₹220', unit: '100g', category: 'whole-spices', image: '/images/products/black-pepper.jpg' },
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

export default function MasalaDryFruitsPage() {
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
            <Breadcrumb.Item active>Masala & Dry Fruits</Breadcrumb.Item>
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
                    ? 'All Masala & Dry Fruits' 
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
