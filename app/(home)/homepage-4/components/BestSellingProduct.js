// import node module libraries
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { ShoppingBag } from "react-feather";

// import custom components
import ProductCardTwo from "components/cards/ProductCardTwo";

// import required data files
import { products } from "data/products/AllProductsData";
import { popularProdSettings } from "data/SliderSettings";

// import helper utility file
import { filterProductsByTag } from "helper/utils";

const BestSellingProduct = () => {
  return (
    <section className="mb-lg-14 my-8">
      <Container>
        <Row className="align-items-center mb-6">
          <Col lg={10} xs={9}>
            <div className="d-xl-flex justify-content-between align-items-center">
              <div className="d-flex">
                <div className="mt-1">
                  <ShoppingBag className="text-primary" size={24} />
                </div>
                <div className="ms-3">
                  <h3 className="mb-0">Best Selling Products</h3>
                  <p className="mb-0">
                    Find the bestseller products in your area with discount.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Slider
              {...popularProdSettings}
              className="product-slider-second"
              id="slider-third"
            >
              {filterProductsByTag(products, "best-seller").map((product) => (
                <div className="item" key={product.id}>
                  <ProductCardTwo product={product} />
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BestSellingProduct;
