'use client';

import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

const SubcategoryGrid = () => {
  const subcategories = [
    {
      id: 'fresh-vegetables',
      title: 'Fresh Vegetables',
      image: '/images/categories/fresh-vegetables.jpeg',
      link: '/category/fruits-vegetables/fresh-vegetables'
    },
    {
      id: 'fresh-fruits',
      title: 'Fresh Fruits',
      image: '/images/categories/fresh-fruits.jpeg',
      link: '/category/fruits-vegetables/fresh-fruits'
    },
    {
      id: 'herbs-seasonings',
      title: 'Herbs & Seasonings',
      image: '/images/categories/Flowers-Leaves.jpeg',
      link: '/category/fruits-vegetables/herbs-seasonings'
    },
    {
      id: 'cuts-sprouts',
      title: 'Cuts & Sprouts',
      image: '/images/categories/Cuts-Sprouts.jpeg',
      link: '/category/fruits-vegetables/cuts-sprouts'
    },
    {
      id: 'exotic-premium',
      title: 'Exotic & Premium',
      image: '/images/categories/Exotics-Premium.jpeg',
      link: '/category/fruits-vegetables/exotic-premium'
    }
  ];

  return (
    <Container className="my-5">
      <h2 className="mb-4">Fruits & Vegetables</h2>
      <Row>
        {subcategories.map((subcategory) => (
          <Col key={subcategory.id} xs={6} sm={4} md={3} lg={2} className="mb-4">
            <Link href={subcategory.link} className="text-decoration-none">
              <div className="card h-100 border-0 shadow-sm hover-scale">
                <div 
                  className="card-img-top" 
                  style={{
                    height: '120px',
                    backgroundImage: `url(${subcategory.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
                <div className="card-body text-center">
                  <h6 className="card-title mb-0 text-dark">{subcategory.title}</h6>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SubcategoryGrid;
