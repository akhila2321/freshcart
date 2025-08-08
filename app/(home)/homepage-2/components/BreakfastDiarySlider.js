// import node module libraries
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

// import custom components
import ProductCard from "components/cards/ProductCard";

// import required data files
import { products } from "data/products/AllProductsData";
import { breakfastDairySliderSetting } from "data/SliderSettings";

// import helper utility file
import { getProductsByCategoryNames } from "helper/utils";

const BreakfastDiarySlider = () => {
  const cateArray = ["Bakery & Biscuits", "Snack & Munchies"];
  const breakFastData = getProductsByCategoryNames(cateArray, products);

  return (
    <section className="my-lg-14 my-8">
      <Container>
        <Row>
          <Col className="mb-6">
            <h3 className="mb-1">Breakfast & dairy</h3>
            <p className="mb-0">butter, cheese, milk, curd and more</p>
          </Col>
        </Row>

        <Slider className="product-slider" {...breakfastDairySliderSetting}>
          {breakFastData.map((item) => (
            <div className="item" key={item.id}>
              <ProductCard product={item} />
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default BreakfastDiarySlider;
