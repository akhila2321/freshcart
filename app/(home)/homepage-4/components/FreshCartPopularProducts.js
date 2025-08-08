// import node module libraries
import { Container, Row, Col } from "react-bootstrap";
import { Star } from "react-feather";
import Slider from "react-slick";

// import required data files
import { popularProdSettings } from "data/SliderSettings";
import { products } from "data/products/AllProductsData";

// import helper utility file
import { getProductsByCategoryNames } from "helper/utils";

// import custom components
import ProductCard from "components/cards/ProductCard";

const FreshCartPopularProducts = () => {
  return (
    <section className="my-lg-14 my-8">
      <Container>
        <Row className="align-items-center mb-6">
          <Col lg={10} xs={10}>
            <h3 className="align-items-center d-flex mb-0 h4">
              <Star className="text-primary" size={24} />
              <span className="ms-3">FreshCart Popular Products</span>
            </h3>
          </Col>
        </Row>

        {/* Product Slide */}
        <Slider
          {...popularProdSettings}
          className="product-slider-second"
          id="slider-second"
        >
          {getProductsByCategoryNames("Fruits & Vegetables", products).map(
            (product) => (
              <div className="item" key={product.id}>
                <ProductCard product={product} />
              </div>
            )
          )}
        </Slider>
      </Container>
    </section>
  );
};

export default FreshCartPopularProducts;
