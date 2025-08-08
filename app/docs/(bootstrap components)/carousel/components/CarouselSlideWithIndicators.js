// import node module libraries
import { Row, Col, Tab, Image, Carousel } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { CarouselWithIndicatorCode } from "data/code/CarouselCode";

const CarouselSlideWithIndicators = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="with-indicators" className="mb-4">
          <h2>With indicators</h2>
          <p>
            You can also add the indicators to the carousel, alongside the
            controls, too.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="design" eventKey={"design"}>
              <Carousel indicators id="carouselExampleIndicators">
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src="/images/blog/blog-img-1.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
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
              <HighlightCode code={CarouselWithIndicatorCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default CarouselSlideWithIndicators;
