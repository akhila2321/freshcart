// import node module libraries
import { Container, Row, Col, Button } from "react-bootstrap";

// import custom components
import HeroSlider2 from "components/hero/HeroSlider2";

const HeroSection = () => {
  return (
    <section className="mt-8">
      <Container>
        <Row>
          <Col xxl={8} xl={7}>
            <HeroSlider2 />
          </Col>
          <Col
            xxl={4}
            xl={5}
            xs={12}
            className="d-lg-flex d-xl-block gap-3 gap-xl-0"
          >
            {/* Horizontal Banner 1 */}
            <div
              className="flex-fill px-8 py-9 mb-6 rounded"
              style={{
                backgroundImage: "url(/images/banner/ad-banner-1.jpg)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div>
                <h3 className="mb-0 fw-bold">
                  10% cashback on
                  <br />
                  personal care
                </h3>
                <div className="mt-4 mb-5 fs-5">
                  <p className="mb-0">Max cashback: $12</p>
                  <span>
                    Code:
                    <span className="fw-bold text-dark"> CARE12</span>
                  </span>
                </div>
                <Button href="#" variant="dark">
                  Shop Now
                </Button>
              </div>
            </div>

            {/* Horizontal Banner 2 */}
            <div
              className="flex-fill px-8 py-8 rounded"
              style={{
                backgroundImage: "url(/images/banner/ad-banner-2.jpg)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div>
                <h3 className="fw-bold mb-3">
                  Say yes to <br /> season’s fresh
                </h3>
                <div className="mt-4 mb-5 fs-5">
                  <p className="fs-5 mb-0">
                    Refresh your day <br /> the fruity way
                  </p>
                </div>

                <Button href="#" variant="dark">
                  Shop Now
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
