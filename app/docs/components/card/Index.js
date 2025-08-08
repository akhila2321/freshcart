"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import FreshComponentLayout from "layout/FreshComponentLayout";

// import sub components
import FeaturedCategoryCard from "./components/FeaturedCategoryCard";
import CardThumbnailOne from "./components/CardThumbnailOne";
import CardThumbnailTwo from "./components/CardThumbnailTwo";
import CardThumbnailThree from "./components/CardThumbnailThree";
import CardThumbnailWithProgressBar from "./components/CardThumbnailWithProgressBar";
import CardWithList from "./components/CardWithList";
import CardWithText from "./components/CardWithText";
import CardWithID from "./components/CardWithID";
import FeaturedStore from "./components/FeaturedStore";
import ReadyToStarted from "./components/ReadyToStarted";
import EarningThumbnail from "./components/EarningThumbnail";
import ShopByCategories from "./components/ShopByCategories";

const Index = () => {
  return (
    <FreshComponentLayout>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-10" id="intro">
            <h1 className="mb-2 fw-bold display-4">Card</h1>
            <p className="lead mb-0">Bootstrap 5 ecommerce product card</p>
          </div>
        </Col>
      </Row>
      <FeaturedCategoryCard />
      <CardThumbnailOne />
      <CardThumbnailTwo />
      <CardThumbnailThree />
      <CardThumbnailWithProgressBar />
      <CardWithList />
      <CardWithText />
      <CardWithID />
      <FeaturedStore />
      <ReadyToStarted />
      <EarningThumbnail />
      <ShopByCategories />
    </FreshComponentLayout>
  );
};

export default Index;
