// import node module libraries
import { Fragment } from "react";

// import custom components
import ProductCardSeven from "components/cards/ProductCardSeven";

// import helper utility file
import { filterProductsByTag } from "helper/utils";

// import required data file
import { products } from "data/products/AllProductsData";

const DealOfTheDay = () => {
  const featuredProduct = filterProductsByTag(products, "deal-of-day");

  return (
    <Fragment>
      <div className="mb-6">
        <div className="mb-6">
          <h3 className="mb-1">Deal of the day</h3>
          <p>Brings to users an array of discounts on a variety</p>
        </div>
        <ProductCardSeven product={featuredProduct[0]} />
      </div>
      <div className="bg-light-danger text-danger p-4 rounded bg-opacity-50 text-center mb-12 d-flex align-items-center justify-content-center">
        <p className="mb-0">
          First time here? Get 10% off your first order!
          <span className="link-danger link-underline-danger">Click here</span>
        </p>
        <span className="border-dashed border-danger py-1 px-3 text-danger rounded bg-light-danger ms-4">
          FIRSTTIME10
        </span>
      </div>
    </Fragment>
  );
};

export default DealOfTheDay;
