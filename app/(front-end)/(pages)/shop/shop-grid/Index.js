"use client";
// import sub-components
import ShopSidebarLayout from "../components/ShopSidebarLayout";

// import required data files
import { products } from "data/products/AllProductsData";

// import custom components
import ProductList from "components/shop/ProductList";

const Index = () => {
  return (
    <ShopSidebarLayout title="Snacks & Munchies" productCount={products.length}>
      <ProductList
        products={products}
        itemPerPage={8}
        xl={4}
        lg={3}
        md={2}
        xs={12}
      />
    </ShopSidebarLayout>
  );
};

export default Index;
