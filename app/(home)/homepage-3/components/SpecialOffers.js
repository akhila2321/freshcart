// import node module libraries
import { Container, Row, Col } from "react-bootstrap";
import { ChevronRight } from "react-feather";
import Link from "next/link";

// import required data files
import { products } from "data/products/AllProductsData";

// import helper utility file
import { filterProductsByTag } from "helper/utils";

// import custom components
import ProductCardWithProgressBar from "components/cards/ProductCardWithProgressBar";

const SpecialOffers = () => {
  return (
    <section className="my-lg-14 my-8">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="d-md-flex justify-content-between align-items-center mb-8">
              <div>
                <h3 className="mb-1">Special Offers of the View All Week!</h3>
                <p>
                  Get exclusive ongoing offers, deals, and discount codes of
                  shopping
                </p>
              </div>
              <div>
                <Link href="#">
                  View All
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        <Row
          xs={2}
          md={3}
          lg={5}
          className="g-0 border border-2 border-danger rounded-3"
        >
          {filterProductsByTag(products, "special-offer")
            .slice(0, 5)
            .map((product) => (
              <Col className="mb-lg-0" key={product.id}>
                <ProductCardWithProgressBar product={product} />
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default SpecialOffers;
