export const SliderOneExampleCode = `
"use client";

// import custom components
import HeroSlider from "components/hero/HeroSlider";

const Page = () => {
  return <HeroSlider />;
};

export default Page;

`.trim();

export const SliderTwoExampleCode = `
"use client";
// import custom components
import HeroSlider2 from "components/hero/HeroSlider2";
import BannerOneExample from "../components/slider/components/BannerOneExample";
import BannerTwoExample from "../components/slider/components/BannerTwoExample";

const Page = () => {
  return (
    <Row>
      <Col xxl={8} xl={7}>
        <HeroSlider2 />
      </Col>
    <Col xxl={4} xl={5} xs={12} className="d-lg-flex d-xl-block gap-3 gap-xl-0">
      <BannerStyle1 />
      <BannerStyle2 />
    </Col>
    </Row>
  );
};

export default Page;

`.trim();

export const SliderThreeExampleCode = `
"use client";

// import custom components
import TeamSlider from "components/common/TeamSlider";

const Page = () => {
  return <TeamSlider />;
};

export default Page;

`.trim();

export const SliderFourExampleCode = `
"use client";

// import custom components
import ShopByCategory from "components/shop/ShopByCategory";

// import required data file
import { shopByCategoryData } from "data/CategoryData";

const Page = () => {
  return <ShopByCategory data={shopByCategoryData} />;
};

export default Page;

`.trim();
