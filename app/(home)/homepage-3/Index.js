"use client";

// import sub components
import HeroSection from "./components/HeroSection";
import PopularCategories from "./components/PopularCategories";
import NewProducts from "./components/NewProducts";
import OneStopGroceryShop from "./components/OneStopGroceryShop";
import SpecialOffers from "./components/SpecialOffers";
import BestSellerProducts from "./components/BestSellerProducts";

// import custom components
import NewsLetterCTA from "components/cta/NewsLetterCTA";

// import template components
import { Home3Template } from "layout/Home3Template";

// import required data file
import { newsLetterData } from "data/CTAData";

const Index = () => {
  return (
    <Home3Template>
      <HeroSection />
      <PopularCategories />
      <NewProducts />
      <OneStopGroceryShop />
      <SpecialOffers />
      <BestSellerProducts />
      <NewsLetterCTA data={newsLetterData} />
    </Home3Template>
  );
};

export default Index;
