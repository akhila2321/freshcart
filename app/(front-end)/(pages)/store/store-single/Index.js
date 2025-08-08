"use client";
// import node module libraries
import { Fragment } from "react";
import { Form, Image } from "react-bootstrap";
import { Search } from "react-feather";

// import custom components
import FreshBreadcrumb from "components/common/FreshBreadcrumb";
import ProductList from "components/shop/ProductList";
import ProductFilters from "components/shop/ProductFilters";

// import sub components
import StoreSidebarLayout from "../components/StoreSidebarLayout";

// import required data files
import { products } from "data/products/AllProductsData";

const Index = () => {
  return (
    <Fragment>
      <FreshBreadcrumb />
      <StoreSidebarLayout>
        <div className="mb-8 bg-light d-lg-flex justify-content-lg-between rounded">
          <div className="align-self-center p-8">
            <div className="mb-3">
              <h5 className="mb-0 fw-bold">E-Grocery Super Market</h5>
              <p className="mb-0 text-muted">
                Whatever the occasion, we&apos;ve got you covered.
              </p>
            </div>
            <div className="position-relative">
              <Form.Control
                type="email"
                id="exampleFormControlInput1"
                placeholder="Search E-Grocery Super Market"
              />
              <span className="position-absolute end-0 top-0 mt-2 me-3">
                <Search size={14} />
              </span>
            </div>
          </div>
          <div className="py-4">
            <Image
              src="/images/svg-graphics/store-graphics.svg"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
        <ProductFilters layoutButton={false} productCount={products.length} />
        <ProductList
          products={products}
          itemPerPage={10}
          xl={4}
          lg={3}
          md={2}
          xs={2}
        />
      </StoreSidebarLayout>
    </Fragment>
  );
};

export default Index;
