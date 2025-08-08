"use client";

// import custom components
import HeroImage from "components/hero/HeroImage";
import ShopByCategory from "components/shop/ShopByCategory";

// import template components
import { Home4Template } from "layout/Home4Template";

// import sub components
import CTABanner from "./components/CTABanner";
import DiscountButton from "./components/DiscountButton";
import BestStoreLocation from "./components/BestStoreLocation";
import PopularRecipes from "./components/PopularRecipes";
import CompanyFeatures from "./components/CompanyFeatures";
import DeliveryAreaList from "./components/DeliveryAreaList";
import BestSellingProduct from "./components/BestSellingProduct";
import FreshCartPopularProducts from "./components/FreshCartPopularProducts";

// import required data file
import { shopByCategoryData } from "data/CategoryData";

const Index = () => {
  return (
    <Home4Template>
      <HeroImage />
      <ShopByCategory data={shopByCategoryData} />
      <FreshCartPopularProducts />
      <CTABanner />
      <BestSellingProduct />
      <DiscountButton />
      <BestStoreLocation />
      <PopularRecipes />
      <CompanyFeatures />
      <DeliveryAreaList />
    </Home4Template>
  );
};

export default Index;
