// import node module libraries
import { useState } from "react";
import Link from "next/link";
import { Row, Col, Tab, Image, Carousel } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { CarouselWithCaptionCode } from "data/code/CarouselCode";

const CarouselWithCaption = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="with-caption" className="mb-4">
          <h2>With caption</h2>
          <p>
            Add captions to your slides easily with the
            <code className="highlighter-rouge"> .carousel-caption </code>
            element within any
            <code className="highlighter-rouge"> .carousel-item </code>. They
            can be easily hidden on smaller viewports, as shown below, with
            optional
            <Link href="#"> display utilities</Link>. We hide them initially
            with
            <code className="highlighter-rouge"> .d-none </code>
            and bring them back on medium-sized devices with
            <code className="highlighter-rouge"> .d-md-block </code>.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="design" eventKey={"design"}>
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                id="carouselExampleCaptions"
              >
                <Carousel.Item>
                  <Image
                    className="d-block w-100"
                    src="/images/blog/blog-img-1.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption className=" d-none d-md-block">
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
                  <Carousel.Caption className="d-none d-md-block ">
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
              <HighlightCode code={CarouselWithCaptionCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default CarouselWithCaption;
