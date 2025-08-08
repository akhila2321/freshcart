// import node module libraries
import Index from "./Index";

// import required data files
import { products } from "data/products/AllProductsData";

export async function generateMetadata({ params }) {
  // Create a hashmap of products using slug as key
  const productsMap = products.reduce((map, product) => {
    map[product.slug] = product;
    return map;
  }, {});

  // Retrieve product based on slug
  const product = productsMap[params.slug];

  return {
    title: product?.product_title,
  };
}

const ShopSingle = () => {
  return <Index />;
};

export default ShopSingle;
