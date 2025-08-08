// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

// import custom components
import ProductCard from "components/cards/ProductCard";

const RelatedItems = ({ products }) => {
  return (
    <section className="my-lg-14 my-14">
      <Container>
        <Row>
          <Col xs={12}>
            <h3>Related Items</h3>
          </Col>
        </Row>

        <Row lg={5} md={2} xs={2} className="g-4 mt-2">
          {products?.slice(0, 5).map((item) => (
            <Col key={item.id}>
              <ProductCard product={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default RelatedItems;
