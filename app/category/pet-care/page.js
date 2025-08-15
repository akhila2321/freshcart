'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Card, Breadcrumb } from 'react-bootstrap';
import { FaHome, FaShoppingCart, FaHeart, FaSearch, FaUser, FaPaw } from 'react-icons/fa';

// Subcategories data
const subcategories = [
  { 
    id: 'all', 
    name: 'All', 
    icon: '/images/category/all-categories.png',
    description: 'All pet care products'
  },
  { 
    id: 'dog-food', 
    name: 'Dog Food', 
    icon: '/images/category/dog-food.png',
    description: 'Nutritional food for dogs of all breeds'
  },
  { 
    id: 'cat-food', 
    name: 'Cat Food', 
    icon: '/images/category/cat-food.png',
    description: 'Wholesome meals for your feline friends'
  },
  { 
    id: 'large-pack', 
    name: 'Large Pack', 
    icon: '/images/category/large-pack.png',
    description: 'Bulk food options for pet owners'
  },
  { 
    id: 'pet-treats-toys', 
    name: 'Pet Treats & Toys', 
    icon: '/images/category/pet-toys.png',
    description: 'Delicious treats and fun toys'
  },
  { 
    id: 'pet-accessories', 
    name: 'Pet Accessories', 
    icon: '/images/category/pet-accessories.png',
    description: 'Essentials for your pet\'s comfort'
  },
  { 
    id: 'small-pet-food', 
    name: 'Small Pet Food', 
    icon: '/images/category/small-pet-food.png',
    description: 'Specialized food for small pets'
  },
];

// Sample products data
const sampleProducts = [
  { id: 1, name: 'Premium Dog Food', price: '₹1,099', unit: '10kg', category: 'dog-food', image: '/images/products/dog-food.jpg' },
  { id: 2, name: 'Grain-Free Cat Food', price: '₹899', unit: '5kg', category: 'cat-food', image: '/images/products/cat-food.jpg' },
  { id: 3, name: 'Dog Food Large Pack', price: '₹2,499', unit: '20kg', category: 'large-pack', image: '/images/products/large-dog-food.jpg' },
  { id: 4, name: 'Dog Chew Toys', price: '₹349', unit: '3 pcs', category: 'pet-treats-toys', image: '/images/products/dog-toys.jpg' },
  { id: 5, name: 'Cat Scratching Post', price: '₹1,299', unit: '1 pc', category: 'pet-accessories', image: '/images/products/cat-scratch.jpg' },
  { id: 6, name: 'Rabbit Food', price: '₹599', unit: '3kg', category: 'small-pet-food', image: '/images/products/rabbit-food.jpg' },
  { id: 7, name: 'Dog Treats', price: '₹249', unit: '500g', category: 'pet-treats-toys', image: '/images/products/dog-treats.jpg' },
  { id: 8, name: 'Cat Litter', price: '₹449', unit: '10L', category: 'pet-accessories', image: '/images/products/cat-litter.jpg' },
  { id: 9, name: 'Bird Food', price: '₹199', unit: '1kg', category: 'small-pet-food', image: '/images/products/bird-food.jpg' },
  { id: 10, name: 'Pet Grooming Kit', price: '₹699', unit: '1 set', category: 'pet-accessories', image: '/images/products/grooming-kit.jpg' },
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

export default function PetCarePage() {
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
            <Breadcrumb.Item active>Pet Care</Breadcrumb.Item>
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
                    ? 'All Pet Care Products' 
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
