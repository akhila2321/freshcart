// import node module libraries
import FreshBadge from "components/common/FreshBadge";
import { Col, Button } from "react-bootstrap";
import Slider from "react-slick";

// import required data files
import { heroSlider2Data } from "data/HeroSliderData";
import { Fragment } from "react";
import { ArrowRight } from "react-feather";

const HeroSlider2 = () => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className="hero-slider" {...settings}>
      {heroSlider2Data.map((slide) => (
        <Fragment key={slide.id}>
          <div
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              borderRadius: "0.5rem",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Col
              xxl={7}
              lg={9}
              className="ps-lg-12 py-lg-16 py-14 px-8 text-xs-center"
            >
              <div className="d-flex align-items-center mb-4">
                <span>Exclusive Offer</span>

                <FreshBadge
                  content={slide.badge}
                  className={"ms-2"}
                  bg="danger"
                />
              </div>

              <h2 className="text-dark display-5 fw-bold mb-3">
                {slide.heading}
              </h2>
              <p className="fs-5 text-dark">{slide.desc}</p>

              <div className="mb-4 mt-4">
                <span className="text-dark">
                  Start from
                  <span className="fs-4 text-primary ms-1">${slide.price}</span>
                </span>
              </div>

              <Button href="#!" variant="primary">
                {slide.actionLabel}
                <ArrowRight className="ms-1" />
              </Button>
            </Col>
          </div>
        </Fragment>
      ))}
    </Slider>
  );
};

export default HeroSlider2;
