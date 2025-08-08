// import node module libraries
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

// import custom components
import ProductCardTwo from "components/cards/ProductCardTwo";

// import required data files
import { products } from "data/products/AllProductsData";
import { bestSellerSliderSettings } from "data/SliderSettings";

// import helper utility file
import { filterProductsByTag } from "helper/utils";

const BestSellerProducts = () => {
  return (
    <section className="my-lg-14 my-8">
      <Container>
        <Row>
          <Col xs={12} className="mb-6">
            <h3 className="mb-1">Bestsellers In Your Area</h3>
            <p className="mb-0">
              Find the bestseller products in your area with discount.
            </p>
          </Col>

          <Slider {...bestSellerSliderSettings} className="product-slider">
            {filterProductsByTag(products, "best-seller").map((product) => (
              <div className="item" key={product.id}>
                <ProductCardTwo product={product} />
              </div>
            ))}
          </Slider>
        </Row>
      </Container>
    </section>
  );
};

export default BestSellerProducts;
