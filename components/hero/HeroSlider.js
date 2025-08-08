// import node module libraries
import React, { Fragment } from "react";
import Slider from "react-slick";
import { Button, Col } from "react-bootstrap";
import { ArrowRight } from "react-feather";

// import custom components
import FreshBadge from "components/common/FreshBadge";

// import require data files
import { heroSliderData } from "data/HeroSliderData";
import { heroSliderSettings } from "data/SliderSettings";

const HeroSlider = () => {
  return (
    <Slider {...heroSliderSettings} className="hero-slider">
      {heroSliderData.map((item, index) => (
        <Fragment key={item.id}>
          <div
            key={item.id}
            style={{
              background: `url(${item.image})`,
              backgroundSize: "cover",
              borderRadius: "0.5rem",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Col
              xxl={5}
              md={7}
              className="ps-lg-12 py-lg-16 py-14 px-8 text-xs-center"
            >
              <FreshBadge
                content={item.badgeText}
                className="text-bg-warning"
                bg="warning"
              />

              <h2 className="text-dark display-5 fw-bold mt-4">
                {item.title}
                {index == 1 ? <span className="text-primary"> $100</span> : ""}
              </h2>
              <p className="lead">{item.desc}</p>

              <Button href="" variant="dark" className="mt-3">
                Show Now
                <ArrowRight className="ms-1" size={16} />
              </Button>
            </Col>
          </div>
        </Fragment>
      ))}
    </Slider>
  );
};

export default HeroSlider;
