// import node module libraries
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

// import required data files
import { products } from "data/products/AllProductsData";

// import helper utility file
import { getProductsByCategoryNames } from "helper/utils";

// import custom components
import ProductCard from "components/cards/ProductCard";

// import required data file
import { biscuitsSnacksSliderSettings } from "data/SliderSettings";

const BiscuitsSnackSlider = () => {
  const cateArray = ["Bakery & Biscuits", "Snack & Munchies", "Instant Food"];
  const biscuitsSnackData = getProductsByCategoryNames(cateArray, products);

  return (
    <section className="my-lg-14 my-8">
      <Container>
        <Row>
          <Col className="mb-6">
            <h3 className="mb-1">Biscuits, snacks & chocolates</h3>
            <p className="mb-0">discover a wide variety of munchies</p>
          </Col>
        </Row>

        <Slider className="product-slider" {...biscuitsSnacksSliderSettings}>
          {biscuitsSnackData.map((item) => (
            <div className="item" key={item.id}>
              <ProductCard product={item} />
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default BiscuitsSnackSlider;
