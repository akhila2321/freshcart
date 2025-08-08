"use client";

// import node module libraries
import { Row, Col } from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import sub components
import CarouselSlideOnly from "./components/CarouselSlideOnly";
import CarouselSlideWithControl from "./components/CarouselSlideWithControl";
import CarouselSlideWithIndicators from "./components/CarouselSlideWithIndicators";
import CarouselWithCaption from "./components/CarouselWithCaption";
import CarouselCrossfade from "./components/CarouselCrossfade";
import CarouselIndividual from "./components/CarouselIndividual";
import CarouselDisableSwipe from "./components/CarouselDisableSwipe";
import CarouselDark from "./components/CarouselDark";

// import required data file
import { carouselLinks } from "data/SidebarContentLinks";

const Index = () => {
  return (
    <DocsInnerLayout links={carouselLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Carousel</h1>
            <p className="mb-6 lead text-muted">
              A slideshow component for cycling through elements—images or
              slides of text—like a carousel.
            </p>
          </div>
        </Col>
      </Row>

      <CarouselSlideOnly />
      <CarouselSlideWithControl />
      <CarouselSlideWithIndicators />
      <CarouselWithCaption />
      <CarouselCrossfade />
      <CarouselIndividual />
      <CarouselDisableSwipe />
      <CarouselDark />

    </DocsInnerLayout>
  );
};

export default Index;
