"use client";

// import sub components
import CategorySlider from "./components/CategorySlider";
import PopularProducts from "./components/PopularProducts";
import HorizontalBanner from "./components/HorizontalBanner";
import DailyBestSale from "./components/DailyBestSale";
import WhyChooseUs from "./components/WhyChooseUs";
import HomeUtilityCategories from "./components/HomeUtilityCategories";
import HorizontalCategoryBar from "../../../components/category/HorizontalCategoryBar";

// import template components
import { DefaultTemplates } from "layout/DefaultTemplate";

// import sub component
import HomeSlider from "./components/HomeSlider";

const Index = () => {
  return (
    <DefaultTemplates>
      <HorizontalCategoryBar />
      <HomeSlider />
      <CategorySlider />
      <HomeUtilityCategories />
      <HorizontalBanner />
      <PopularProducts />
      <DailyBestSale />
      <WhyChooseUs />
    </DefaultTemplates>
  );
};

export default Index;
