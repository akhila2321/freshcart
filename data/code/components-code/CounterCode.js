export const CounterCode = `
// import custom components
import {Container, Row, Col} from "react-bootstrap
import CountUp from "react-countup";

const Page = () => {
  return(
    <div className="bg-success py-14">
        <Container>
          <Row>
            <Col lg={{ offset: 1, span: 10 }}>
              <Row>
                <Col xl={4} md={6}>
                  <div className="text-white me-8 mb-12">
                    <h2 className="text-white mb-4">
                      Trusted by retailers. Loved by customers.
                    </h2>
                    <p>
                      We give everyone access to the food they
                      love and more time to enjoy it together.
                    </p>
                  </div>
                </Col>

                <Row xs={2} md={4}>
                  <Col className="mb-md-0">
                    <h3 className="display-5 fw-bold text-white mb-0">
                      <CountUp
                        start={0}
                        end={500}
                        suffix={"k"}
                      />
                    </h3>
                    <span className="fs-6 text-white">
                      Shoppers
                    </span>
                  </Col>
                  <Col className="mb-md-0">
                    <h3 className="display-5 fw-bold text-white mb-0">
                      <CountUp
                        start={0}
                        end={4500}
                        suffix={"+"}
                      />
                    </h3>
                    <span className="fs-6 text-white">
                      Cities
                    </span>
                  </Col>
                  <Col className="mb-md-0">
                    <h3 className="display-5 fw-bold text-white mb-0">
                      <CountUp
                        start={0}
                        end={40}
                        suffix={"k+"}
                      />
                    </h3>
                    <span className="fs-6 text-white">
                      Stores
                    </span>
                  </Col>

                  <Col className="mb-md-0">
                    <h3 className="display-5 fw-bold text-white mb-0">
                      <CountUp
                        start={0}
                        end={650}
                        suffix={"+"}
                      />
                    </h3>
                    <span className="fs-6 text-white">
                      Retail Brands
                    </span>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
  )
};

export default Page;

`.trim();
