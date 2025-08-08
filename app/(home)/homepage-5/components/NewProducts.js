// import node module libraries
import { Row, Col, Button } from "react-bootstrap";

// import custom components
import ProductCardSix from "components/cards/ProductCardSix";

// import required data file
import { products } from "data/products/AllProductsData";

const NewProducts = () => {
  return (
    <Row>
      <Col xs={12}>
        <Row className="align-items-center mb-6">
          <Col xl={10} lg={9} xs={8}>
            <div className="mb-4 mb-lg-0">
              <h3 className="mb-1">New Products</h3>
              <p className="mb-0">New products with updated stocks.</p>
            </div>
          </Col>
          <Col xl={2} lg={3} xs={4} className="text-end">
            <Button variant="light">View All</Button>
          </Col>
        </Row>
        <Row xl={4} lg={3} className="g-4">
          {products.slice(0, 12).map((product) => (
            <Col key={product.id}>
              <div className="mb-6">
                <ProductCardSix product={product} />
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default NewProducts;
