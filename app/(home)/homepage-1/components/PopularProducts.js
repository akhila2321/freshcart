"use client";
// import node module libraries
import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

// import custom components
import ProductCard from "components/cards/ProductCard";

// import require data files
import { products } from "data/products/AllProductsData";

// import helper utility file
import { filterProductsByTag } from "helper/utils";

const PopularProducts = () => {
  // Get product by tag name
  const popularProductsData = filterProductsByTag(products, "popular-products");

  return (
    <Fragment>
      <section className="my-lg-14 my-8">
        <Container>
          <Row>
            <Col xs={12} className="mb-6">
              <h3 className="mb-0">Popular Products</h3>
            </Col>
          </Row>

          {/* Product Grid */}
          <Row lg={5} xs={2} md={3} className="g-4">
            {popularProductsData.map((product) => (
              <Col key={product.id}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default PopularProducts;
