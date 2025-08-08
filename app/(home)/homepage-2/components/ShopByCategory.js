// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

// import custom components
import CategoryCard from "components/cards/CategoryCard";

// import required data file
import { categoryData } from "data/CategoryData";

const ShopByCategory = () => {
  return (
    <section className="my-lg-14 my-8">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="mb-8">
              <h3 className="mb-0">Shop by Category</h3>
            </div>
          </Col>
        </Row>

        <Row xs={2} md={3} lg={4} xxl={6} className="g-6">
          {categoryData.map((category) => (
            <Col key={category.id}>
              <CategoryCard category={category} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ShopByCategory;
