"use client";

// import custom components
import ProductList from "components/shop/ProductList";

// import sub components
import ShopSidebarLayout from "../components/ShopSidebarLayout";

// import required data files
import { products } from "data/products/AllProductsData";

const Index = () => {
  return (
    <ShopSidebarLayout title="Snacks & Munchies" productCount={products.length}>
      <ProductList products={products} itemPerPage={6} xs={1} grid={false} />
    </ShopSidebarLayout>
  );
};

export default Index;
