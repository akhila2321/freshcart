// import node module libraries
import { Row, Col, Tab, Carousel, Image } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { CarouselDarkCode } from "data/code/CarouselCode";

const CarouselDark = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="dark-variant" className="mb-4">
          <h2>Dark Variant</h2>
          <p>
            Add
            <code> .carousel-dark </code>
            to the
            <code> .carousel </code>
            for darker controls, indicators, and captions. Controls have been
            inverted from their default white fill with the
            <code> filter </code>CSS property. Captions and controls have
            additional Sass variables that customize the<code> color </code> and
            <code> background-color </code>.
          </p>
        </div>

        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <Carousel variant="dark">
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src="/images/blog/blog-img-1.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption className="d-none d-md-block">
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src="/images/blog/blog-img-2.jpg"
                    alt="Second slide"
                  />
                  <Carousel.Caption className="d-none d-md-block">
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src="/images/blog/blog-img-3.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption className="d-none d-md-block">
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={CarouselDarkCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default CarouselDark;
