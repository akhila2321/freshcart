// import node module libraries
import React, { Fragment, useState, useEffect, useRef } from "react";
import { Image } from "react-bootstrap";
import Slider from "react-slick";

// import custom components
import ImageHoverZoom from "components/common/ImageHoverZoom";
import { NextSlideArrow, PrevSlideArrow } from "components/common/SliderArrows";

const ProductImageSliderTwo = ({ images }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  return (
    <Fragment>
      <div className="product" id="product">
        <div>
          <div>
            <Slider
              className="slider-for"
              slidesToShow={1}
              slidesToScroll={1}
              asNavFor={nav2}
              ref={(slider) => (sliderRef1 = slider)}
              arrows={false}
              fade={true}
            >
              {images?.map((item) => (
                <div key={item.id}>
                  <ImageHoverZoom
                    src={item.image}
                    alt=""
                    className="img-fluid rounded-2 "
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <Slider
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        slidesToShow={4}
        swipeToSlide
        focusOnSelect
        arrows
        prevArrow={<PrevSlideArrow />}
        nextArrow={<NextSlideArrow />}
        className="slider-nav mt-4"
      >
        {images?.map((item, index) => (
          <div
            key={index}
          // className={`${currentSlide === index ? "tns-nav-active" : ""}`}
          >
            <div className="thumbnails-img p-1">
              <Image src={item.image} alt="Image" className="w-100 rounded" />
            </div>
          </div>
        ))}
      </Slider>
    </Fragment>
  );
};

export default ProductImageSliderTwo;
