"use client";

// import custom components
import HeroSlider3 from "components/hero/HeroSlider3";
import PromotionModal from "components/modal/PromotionModal";

// import template components
import { Home5Template } from "layout/Home5Template";

// import sub components
import HomeLayout from "./components/HomeLayout";
import NewArrivalSlider from "./components/NewArrivalSlider";
import NewProducts from "./components/NewProducts";
import DealOfTheDay from "./components/DealOfTheDay";

const Index = () => {
  return (
    <Home5Template>
      <HeroSlider3 />
      <HomeLayout>
        <NewArrivalSlider />
        <DealOfTheDay />
        <NewProducts />
        <PromotionModal />
      </HomeLayout>
    </Home5Template>
  );
};

export default Index;
