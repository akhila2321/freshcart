// import node module librarie
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

// import custom components
import ProductCard from "components/cards/ProductCard";
import { NextSlideArrow, PrevSlideArrow } from "components/common/SliderArrows";

// import required data files
import { products } from "data/products/AllProductsData";

// import helper utility file
import { getProductByCategoryName } from "helper/utils";

const FruitsVegitablesSlider = () => {
  const fruitsVegitables = getProductByCategoryName(
    "Fruits & Vegetables",
    products
  );

  //Fruits & Vegitable slider settings
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: true,
    prevArrow: <PrevSlideArrow />,
    nextArrow: <NextSlideArrow />,
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 4, slidesToScroll: 4 } },
      { breakpoint: 820, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <Container>
      <Row>
        <Col xs={12} className="mb-6">
          <h3 className="mb-1">Fruits & vegetables</h3>
          <p className="mb-0">eat fresh, stay healthy</p>
        </Col>
      </Row>

      <Slider className="product-slider" {...settings}>
        {fruitsVegitables.map((item) => (
          <div className="item" key={item.id}>
            <ProductCard product={item} />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default FruitsVegitablesSlider;
