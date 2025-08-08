// import node module libraries
import { Row, Col, Tab, Carousel, Image } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { CarouselIndividualCode } from "data/code/CarouselCode";

const CarouselIndividual = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="individual" className="mb-4">
          <h2>Individual</h2>
          <p>
            Add
            <code className="highlighter-rouge">
              {" "}
              data-bs-interval=&quot;&quot;{" "}
            </code>
            to a<code className="highlighter-rouge"> .carousel-item </code>
            to change the amount of time to delay between automatically cycling
            to the next item.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <Carousel indicators={false} id="carouselExampleInterval">
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
              <HighlightCode code={CarouselIndividualCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default CarouselIndividual;
