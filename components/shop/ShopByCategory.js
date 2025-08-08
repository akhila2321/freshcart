// import node module libraries
import { Container, Row, Col } from "react-bootstrap";
import { Layers } from "react-feather";
import Slider from "react-slick";

// import custom components
import CategoryCard from "components/cards/CategoryCard";

// import required data files
import { shopCategorySettings } from "data/SliderSettings";

const ShopByCategory = ({ data }) => {
  return (
    <section className="my-lg-14 my-8">
      <Container>
        <Row className="align-items-center mb-6">
          <Col xs={10}>
            <div>
              <h3 className="align-items-center d-flex mb-0 h4">
                <Layers className="text-primary" />
                <span className="ms-3">Shop by Categories</span>
              </h3>
            </div>
          </Col>
        </Row>
        <Row className="g-6">
          <Col xs={12}>
            <div className="position-relative">
              <Slider
                {...shopCategorySettings}
                className="slider-8-columns"
                id="slider-8-columns"
              >
                {data?.map((category) => (
                  <div className="item" key={category.id}>
                    <CategoryCard category={category} type="icon" />
                  </div>
                ))}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ShopByCategory;
