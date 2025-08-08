// import node module libraries
import { Row, Col, Tab, Carousel, Image } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { CarouselDisableSwipeCode } from "data/code/CarouselCode";

const CarouselDisableSwipe = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="touch-swipe" className="mb-4">
          <h2>Disable touch swiping</h2>
          <p>
            Carousels support swiping left/right on touchscreen devices to move
            between slides. This can be disabled using the
            <code> data-bs-touch </code>
            attribute. The example below also does not include the
            <code> data-bs-ride </code>
            attribute and has
            <code> data-bs-interval=&quot;false&quot; </code>
            so it doesn’t autoplay.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <Carousel
                indicators={false}
                touch={false}
                id="carouselExampleControlsNoTouching"
              >
                <Carousel.Item interval={1000}>
                  <Image
                    className="d-block w-100"
                    src="/images/blog/blog-img-1.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <Image
                    className="d-block w-100"
                    src="/images/blog/blog-img-2.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src="/images/blog/blog-img-3.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={CarouselDisableSwipeCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default CarouselDisableSwipe;
