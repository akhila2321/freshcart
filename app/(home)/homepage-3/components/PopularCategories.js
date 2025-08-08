// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

// import required data files
import { categoryCircleData } from "data/CategoryData";

// import custom components
import CategoryCircleCard from "components/cards/CategoryCircleCard";

const PopularCategories = () => {
  return (
    <section className="my-lg-14 my-8">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="mb-6">
              <h3 className="mb-0">Shop Popular Categories</h3>
            </div>
          </Col>
        </Row>

        <Row>
          {categoryCircleData.map((item) => (
            <Col lg={2} md={4} xs={6} key={item.id}>
              <CategoryCircleCard image={item.image} category={item.title} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularCategories;
