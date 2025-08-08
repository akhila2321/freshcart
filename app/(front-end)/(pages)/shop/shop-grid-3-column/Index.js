"use client";

// import sub components
import ShopSidebarLayout from "../components/ShopSidebarLayout";

// import custom components
import ProductList from "components/shop/ProductList";

// import required data files
import { products } from "data/products/AllProductsData";

const Index = () => {
  return (
    <ShopSidebarLayout title="Snacks & Munchies" productCount={products.length}>
      <ProductList
        products={products}
        itemPerPage={9}
        xl={3}
        lg={3}
        xs={2}
        md={2}
      />
    </ShopSidebarLayout>
  );
};

export default Index;
