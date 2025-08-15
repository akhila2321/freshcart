'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Card, Breadcrumb } from 'react-bootstrap';
import { FaHome, FaShoppingCart, FaHeart, FaSearch, FaUser, FaBaby } from 'react-icons/fa';

// Subcategories data
const subcategories = [
  { 
    id: 'all', 
    name: 'All', 
    icon: '/images/category/all-categories.png',
    description: 'All baby care products'
  },
  { 
    id: 'baby-diapering', 
    name: 'Baby Diapering', 
    icon: '/images/category/baby-diapers.png',
    description: 'Diapers and changing essentials'
  },
  { 
    id: 'baby-bath', 
    name: 'Baby Bath', 
    icon: '/images/category/baby-bath.png',
    description: 'Bath time essentials for babies'
  },
  { 
    id: 'baby-skin-hair', 
    name: 'Baby Skin & Hair Care', 
    icon: '/images/category/baby-skincare.png',
    description: 'Gentle care for baby skin and hair'
  },
  { 
    id: 'baby-wipes', 
    name: 'Baby Wipes', 
    icon: '/images/category/baby-wipes.png',
    description: 'Gentle wipes for baby care'
  },
  { 
    id: 'baby-feeding', 
    name: 'Baby Feeding', 
    icon: '/images/category/baby-feeding.png',
    description: 'Feeding essentials for infants'
  },
  { 
    id: 'baby-health', 
    name: 'Baby Health', 
    icon: '/images/category/baby-health.png',
    description: 'Healthcare products for babies'
  },
  { 
    id: 'infant-clothing', 
    name: 'Infant Clothing', 
    icon: '/images/category/baby-clothing.png',
    description: 'Clothing for newborns and infants'
  },
];

// Sample products data
const sampleProducts = [
  { id: 1, name: 'Premium Diapers', price: '₹899', unit: 'Pack of 60', category: 'baby-diapering', image: '/images/products/baby-diapers.jpg' },
  { id: 2, name: 'Baby Shampoo', price: '₹249', unit: '200ml', category: 'baby-bath', image: '/images/products/baby-shampoo.jpg' },
  { id: 3, name: 'Baby Lotion', price: '₹199', unit: '200ml', category: 'baby-skin-hair', image: '/images/products/baby-lotion.jpg' },
  { id: 4, name: 'Sensitive Wipes', price: '₹149', unit: '72 pcs', category: 'baby-wipes', image: '/images/products/baby-wipes.jpg' },
  { id: 5, name: 'Feeding Bottle', price: '₹349', unit: '240ml', category: 'baby-feeding', image: '/images/products/feeding-bottle.jpg' },
  { id: 6, name: 'Baby Thermometer', price: '₹599', unit: '1 pc', category: 'baby-health', image: '/images/products/baby-thermometer.jpg' },
  { id: 7, name: 'Baby Bodysuits', price: '₹399', unit: 'Pack of 3', category: 'infant-clothing', image: '/images/products/baby-bodysuits.jpg' },
  { id: 8, name: 'Baby Powder', price: '₹175', unit: '200g', category: 'baby-skin-hair', image: '/images/products/baby-powder.jpg' },
  { id: 9, name: 'Baby Oil', price: '₹225', unit: '200ml', category: 'baby-bath', image: '/images/products/baby-oil.jpg' },
  { id: 10, name: 'Baby Food', price: '₹299', unit: '400g', category: 'baby-feeding', image: '/images/products/baby-food.jpg' },
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

export default function BabyCarePage() {
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
            <Breadcrumb.Item active>Baby Care</Breadcrumb.Item>
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
                    ? 'All Baby Care Products' 
                    : currentSubcategory.name}
                </h2>
                <div className="text-muted">
                  {filteredProducts.length} items
                </div>
              </div>
              
              {/* Horizontal Scrolling Subcategory List - Mobile View */}
              <div className="d-lg-none mb-4">
                <div className="d-flex overflow-auto pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {subcategories.map((subcategory) => (
                    <button
                      key={subcategory.id}
                      className={`btn btn-sm rounded-pill me-2 flex-shrink-0 ${
                        activeSubcategory === subcategory.id 
                          ? 'btn-primary' 
                          : 'btn-outline-secondary'
                      }`}
                      onClick={() => setActiveSubcategory(subcategory.id)}
                    >
                      {subcategory.name}
                    </button>
                  ))}
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
