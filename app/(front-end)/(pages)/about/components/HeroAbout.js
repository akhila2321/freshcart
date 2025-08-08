// import node module libraries
import { Container, Row, Col, Image } from "react-bootstrap";

// import sub components
import AboutFeatured from "./AboutFeatured";

const HeroAbout = () => {
  return (
    <section className="mt-lg-14 mt-8">
      <Container>
        <Row>
          <Col lg={{ offset: 1, span: 10 }} xs={12}>
            <Row className="align-items-center mb-14">
              <Col md={6}>
                <div className="ms-xxl-14 me-xxl-15 mb-8 mb-md-0 text-center text-md-start">
                  <h1 className="mb-6">The Future of Grocery Delivery:</h1>
                  <p className="mb-0 lead">
                    By powering the future of grocery with our retail partners,
                    we give everyone access to the food they love and more time
                    to enjoy it together.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="me-6">
                  <Image
                    src="/images/about/about-img.jpg"
                    alt=""
                    className="img-fluid rounded"
                  />
                </div>
              </Col>
            </Row>

            {/* About CTA Featured  */}
            <AboutFeatured />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroAbout;
