"use client";
// import custom components
import WelcomeCTA from "components/cta/WelcomeCTA";

// import template components
import { Home2Template } from "layout/Home2Template";

// import sub components
import OffersBanner from "./components/OffersBanner";
import ShopByCategory from "./components/ShopByCategory";
import FruitsVegitablesSlider from "./components/FruitsVegitablesSlider";
import BreakfastDiarySlider from "./components/BreakfastDiarySlider";
import BiscuitsSnackSlider from "./components/BiscuitsSnackSlider";
import AppDownload from "./components/AppDownload";
import WhyChooseUs from "./components/WhyChooseUs";

// import required data file
import { welcomeCTAData } from "data/CTAData";

const Index = () => {
  return (
    <Home2Template>
      <WelcomeCTA data={welcomeCTAData} />

      <OffersBanner />

      <ShopByCategory />

      <FruitsVegitablesSlider />

      <BreakfastDiarySlider />

      <BiscuitsSnackSlider />

      <AppDownload />

      <WhyChooseUs />
    </Home2Template>
  );
};

export default Index;
