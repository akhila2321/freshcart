// import node module libraries
import React, { Fragment, useState, useEffect } from "react";
import { Image, Col, Row } from "react-bootstrap";
import Slider from "react-slick";

// import custom components
import ImageHoverZoom from "../common/ImageHoverZoom";

const ProductImageSlider = ({ images }) => {
  const [nav1, setNav1] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slider1, setSlider1] = useState(null);

  useEffect(() => {
    setNav1(slider1);
  }, [slider1]);

  const settings = {
    onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
    lazyLoad: true,
    asNavFor: ".slider-nav",
    focusOnSelect: true,
    arrows: false,
  };

  return (
    <Fragment>
      <div className="product" id="product">
        <div>
          <div>
            <Slider
              {...settings}
              asNavFor={nav1}
              ref={(slider) => setSlider1(slider)}
            >
              {images?.map((product) => (
                <div
                  className="product productModal"
                  id="productModal"
                  key={product.id}
                >
                  <ImageHoverZoom
                    src={product.image}
                    alt=""
                    className="img-fluid rounded-2"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="product-tools">
        <Row className="thumbnails g-3" id="productModalThumbnails">
          {images.slice(0, 4).map((item, index) => (
            <Col
              xs={3}
              key={item.id}
              className={`${currentSlide === index ? "tns-nav-active" : ""}`}
              onClick={() => {
                slider1?.slickGoTo(index);
              }}
            >
              <div className="thumbnails-img">
                <Image src={item.image} alt="Image" />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Fragment>
  );
};

export default ProductImageSlider;
