"use client";
// import node module libraries
import { useParams } from 'next/navigation';

// import sub-components
import ShopSidebarLayout from "../../shop/components/ShopSidebarLayout";

// import required data files
import { products } from "data/products/AllProductsData";
import { allCategories } from "routes/MainNavigation";

// import custom components
import ProductList from "components/shop/ProductList";

const CategoryPage = () => {
  const { categoryId } = useParams();
  
  // Find the selected category
  const selectedCategory = allCategories.find(cat => cat.id === categoryId);
  
  // Filter products by category
  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory.title)
    : [];

  return (
    <ShopSidebarLayout 
      title={selectedCategory?.title || 'Category'} 
      productCount={filteredProducts.length}
    >
      <ProductList
        products={filteredProducts}
        itemPerPage={8}
        xl={4}
        lg={3}
        md={2}
        xs={12}
      />
    </ShopSidebarLayout>
  );
};

export default CategoryPage;
