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
    description: 'All instant food products'
  },
  { 
    id: 'noodles-vermicelli', 
    name: 'Noodles & Vermicelli', 
    icon: '/images/category/noodles.png',
    description: 'Instant noodles and vermicelli'
  },
  { 
    id: 'pasta-soups', 
    name: 'Pasta & Soups', 
    icon: '/images/category/pasta-soups.png',
    description: 'Instant pasta and soup mixes'
  },
  { 
    id: 'papads-pickles', 
    name: 'Papads, Pickles & Chutney', 
    icon: '/images/category/papads-pickles.png',
    description: 'Papads, pickles and chutneys'
  },
  { 
    id: 'ready-to-cook', 
    name: 'Ready to Cook', 
    icon: '/images/category/ready-to-cook.png',
    description: 'Ready to cook meal kits'
  },
  { 
    id: 'baking-mixes', 
    name: 'Baking Mixes & Ingredients', 
    icon: '/images/category/baking-mixes.png',
    description: 'Baking essentials and mixes'
  },
  { 
    id: 'dessert-mixes', 
    name: 'Dessert Mixes', 
    icon: '/images/category/dessert-mixes.png',
    description: 'Instant dessert mixes'
  },
];

// Sample products data
const sampleProducts = [
  { id: 1, name: 'Instant Noodles', price: '₹40', unit: '70g', category: 'noodles-vermicelli', image: '/images/products/instant-noodles.jpg' },
  { id: 2, name: 'Pasta Pack', price: '₹120', unit: '200g', category: 'pasta-soups', image: '/images/products/pasta-pack.jpg' },
  { id: 3, name: 'Mango Pickle', price: '₹150', unit: '500g', category: 'papads-pickles', image: '/images/products/mango-pickle.jpg' },
  { id: 4, name: 'Ready to Eat Meals', price: '₹180', unit: '300g', category: 'ready-to-cook', image: '/images/products/ready-meal.jpg' },
  { id: 5, name: 'Pancake Mix', price: '₹220', unit: '400g', category: 'baking-mixes', image: '/images/products/pancake-mix.jpg' },
  { id: 6, name: 'Gulab Jamun Mix', price: '₹60', unit: '200g', category: 'dessert-mixes', image: '/images/products/gulab-jamun-mix.jpg' },
  { id: 7, name: 'Vermicelli', price: '₹50', unit: '200g', category: 'noodles-vermicelli', image: '/images/products/vermicelli.jpg' },
  { id: 8, name: 'Tomato Soup', price: '₹80', unit: '60g', category: 'pasta-soups', image: '/images/products/tomato-soup.jpg' },
  { id: 9, name: 'Papad', price: '₹30', unit: '100g', category: 'papads-pickles', image: '/images/products/papad.jpg' },
  { id: 10, name: 'Cake Mix', price: '₹250', unit: '500g', category: 'baking-mixes', image: '/images/products/cake-mix.jpg' },
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

export default function InstantFoodPage() {
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
            <Breadcrumb.Item active>Instant Food</Breadcrumb.Item>
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
                    ? 'All Instant Food' 
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
