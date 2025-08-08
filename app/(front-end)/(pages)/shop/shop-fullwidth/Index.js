"use client";
import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

// import custom components
import ShopHeading from "components/shop/ShopHeading";
import ProductList from "components/shop/ProductList";
import ProductFilters from "components/shop/ProductFilters";
import FreshBreadcrumb from "components/common/FreshBreadcrumb";

// import required data files
import { products } from "data/products/AllProductsData";

const Index = () => {
  return (
    <Fragment>
      <FreshBreadcrumb />
      <section className="mt-8 mb-lg-14 mb-8">
        <Container>
          <Row>
            <Col lg={12}>
              <ShopHeading title="Snacks & Munchies" />

              <ProductFilters
                filterButton={false}
                productCount={products.length}
              />

              <ProductList
                products={products}
                itemPerPage={10}
                lg={5}
                md={3}
                xs={2}
                xl={5}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Index;
