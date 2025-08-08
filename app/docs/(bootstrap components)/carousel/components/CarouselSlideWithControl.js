// import node module libraries
import { Row, Col, Tab, Image, Carousel } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { CarouselWithControlCode } from "data/code/CarouselCode";

const CarouselSlideWithControl = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="with-controls" className="mb-4">
          <h2>With Control</h2>
          <p>Adding in the previous and next controls:</p>
        </div>

        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <Carousel indicators={false} id="carouselExampleControls">
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
                    src="/images/blog/blog-img-1.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src="/images/blog/blog-img-1.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={CarouselWithControlCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default CarouselSlideWithControl;
