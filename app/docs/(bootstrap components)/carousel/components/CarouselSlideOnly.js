// import node module libraries
import { Row, Col, Tab, Carousel, Image } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { CarouselCode } from "data/code/CarouselCode";

const CarouselSlideOnly = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="slide" className="mb-4">
          <h2>Slides only</h2>
          <p>
            Here’s a carousel with slides only. Note the presence of the
            <code className="highlighter-rouge"> .d-block </code>
            and
            <code className="highlighter-rouge"> .w-100 </code>
            on carousel images to prevent browser default image alignment.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <Carousel
                controls={false}
                indicators={false}
                id="carouselExampleSlidesOnly"
              >
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
              <HighlightCode code={CarouselCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default CarouselSlideOnly;
