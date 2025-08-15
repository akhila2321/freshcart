import { Container, Row, Col } from 'react-bootstrap';
import { homeUtilityCategories } from '@/routes/MainNavigation';
import CategoryCard from './components/CategoryCard';

export const metadata = {
  title: 'Home Essentials - FreshCart',
  description: 'Browse our collection of home essentials',
};

export default function HomeEssentials() {
  return (
    <main className="page-wrapper">
      <div className="py-10 py-lg-12 bg-light">
        <Container>
          {/* Page header */}
          <div className="mb-6">
            <h1 className="mb-1 h2 fw-bold">Home Essentials</h1>
            <p>Everything you need for your home in one place</p>
          </div>
          
          {/* Categories Grid */}
          <Row className="g-4">
            {homeUtilityCategories.map((category) => (
              <Col key={category.id} xs={6} md={4} lg={3} xl={2}>
                <CategoryCard category={category} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </main>
  );
}
