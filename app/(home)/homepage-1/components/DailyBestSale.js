"use client";
// import node module libraries
import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

// import custom components
import VerticalCTA from "components/cta/VerticalCTA";
import ProductWithCountdown from "components/cards/ProductWithCountdown";

// import require data files
import { products } from "data/products/AllProductsData";
import { verticalCTAData } from "data/CTAData";

// import helper utility file
import { filterProductsByTag } from "helper/utils";

const DailyBestSale = () => {
  const dailySaleData = filterProductsByTag(products, "daily-sale");

  return (
    <Fragment>
      <section>
        <Container>
          <Row>
            <Col md={12} className="mb-6">
              <h3 className="mb-0">Daily Best Sells</h3>
            </Col>
          </Row>
          <div className="table-responsive-xl pb-6">
            <Row lg={4} xs={1} md={2} className="g-4 flex-nowrap">
              <Col>
                <VerticalCTA data={verticalCTAData} />
              </Col>

              {/* Daily Sale */}
              {dailySaleData.slice(0, 3).map((item) => (
                <Col key={item.id}>
                  <ProductWithCountdown product={item} />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default DailyBestSale;
