"use client";
// import node module libraries
import { Fragment } from "react";

// import sub components
import SingleProductDetails from "../components/SingleProductDetails";
import ProductDetailsTab from "../components/ProductDetailsTab";
import RelatedItems from "../components/RelatedItems";

// import custom components
import FreshBreadcrumb from "components/common/FreshBreadcrumb";

// import required hooks
import { useParams } from "next/navigation";

// import required data files
import { products } from "data/products/AllProductsData";

const Index = () => {
  const params = useParams();

  // Create a hashmap of products using slug as key
  const productsMap = products.reduce((map, product) => {
    map[product.slug] = product;
    return map;
  }, {});

  // Retrieve product based on slug
  const product = productsMap[params.slug];

  return (
    <Fragment>
      <FreshBreadcrumb />
      <SingleProductDetails data={product} />
      <ProductDetailsTab data={product} />
      <RelatedItems products={products} />
    </Fragment>
  );
};

export default Index;
