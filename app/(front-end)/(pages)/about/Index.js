"use client";
// import node module libraries
import { Fragment } from "react";

// import sub components
import HeroAbout from "./components/HeroAbout";
import AboutStats from "./components/AboutStats";
import LeadershipSlider from "./components/LeadershipSlider";

const Index = () => {
  return (
    <Fragment>
      <HeroAbout />
      <AboutStats />
      <LeadershipSlider />
    </Fragment>
  );
};

export default Index;
