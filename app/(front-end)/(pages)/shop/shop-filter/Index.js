"use client";
// import node module libraries
import { Fragment } from "react";
import { Container, Row } from "react-bootstrap";

// import sub components
import FilterType from "../components/FilterType";

// import custom components
import ShopFilters from "components/shop/ShopFilters";
import ProductList from "components/shop/ProductList";
import FreshBreadcrumb from "components/common/FreshBreadcrumb";

// import required data files
import { products } from "data/products/AllProductsData";

const Index = () => {
  return (
    <Fragment>
      <FreshBreadcrumb />

      <section className="mt-8 mb-lg-14 mb-8">
        <Container>
          <Row className="gx-10">
            <FilterType />

            <ShopFilters productCount={products.length} />

            <ProductList
              products={products}
              itemPerPage={10}
              xl={5}
              lg={3}
              md={2}
              xs={2}
            />
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Index;
