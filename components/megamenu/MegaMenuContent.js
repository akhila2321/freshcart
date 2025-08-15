'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';

export default function MegaMenuContent() {
  const categories = [
    {
      title: 'Electronics',
      items: ['Smartphones', 'Laptops', 'Headphones', 'Smart Watches']
    },
    {
      title: 'Fashion',
      items: ['Men\'s Clothing', 'Women\'s Clothing', 'Shoes', 'Accessories']
    },
    {
      title: 'Home & Garden',
      items: ['Furniture', 'Kitchen', 'Bedding', 'Decor']
    },
    {
      title: 'Beauty',
      items: ['Skincare', 'Makeup', 'Hair Care', 'Fragrances']
    }
  ];

  return (
    <Container className="py-5">
      <h1 className="mb-4">Shop by Category</h1>
      <Row className="g-4">
        {categories.map((category, index) => (
          <Col key={index} md={6} lg={3}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title className="h5">{category.title}</Card.Title>
                <ul className="list-unstyled">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="mb-2">
                      <a href="#" className="text-decoration-none text-dark" onClick={(e) => e.preventDefault()}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
