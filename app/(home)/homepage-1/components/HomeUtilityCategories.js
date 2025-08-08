'use client';

import React from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { homeUtilityCategories } from 'routes/MainNavigation';

const HomeUtilityCategories = () => {
  return (
    <section className="mb-lg-10 mt-lg-14 my-8">
      <Container>
        <Row>
          <Col xs={12} className="mb-6">
            <h3 className="mb-0">Home Essentials</h3>
            <p className="mb-0 text-muted">Everything you need for your home in one place</p>
          </Col>
        </Row>
        <Row className="g-4">
          {homeUtilityCategories.map((item) => (
            <Col lg={2} md={4} xs={6} key={item.id}>
              <Link href={item.link} className="text-decoration-none">
                <div className="text-center p-3 rounded-3 bg-white h-100 d-flex flex-column align-items-center justify-content-center">
                  <div className="mb-2">
                    <img 
                      src={item.icon} 
                      alt={item.title} 
                      className="img-fluid" 
                      style={{ height: '48px' }} 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/images/placeholder.svg';
                      }}
                    />
                  </div>
                  <div className="text-dark text-center">
                    <p className="mb-0 fw-semi-bold">{item.title}</p>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HomeUtilityCategories;
