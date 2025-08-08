"use client";

// import node module libraries
import { Container, Row, Col, Tab } from "react-bootstrap";
import CountUp from "react-countup";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { CounterCode } from "data/code/components-code/CounterCode";

const Index = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={12} sm={12} xs={12}>
          <div className="docs-content mx-xxl-9">
            <Row>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <div className="mb-8" id="intro">
                  <h1 className="mb-0 fw-bold">Counter</h1>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                <div id="" className="mb-4">
                  <h2 className="mb-0">Counter</h2>
                </div>
                <div className="mb-10">
                  <CustomTab defaultActiveKey={"design"}>
                    <Tab.Pane
                      title="Design"
                      eventKey={"design"}
                      className="bg-light p-4"
                    >
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
                    </Tab.Pane>
                    <Tab.Pane title="Code" eventKey={"code"}>
                      <HighlightCode code={CounterCode} />
                    </Tab.Pane>
                  </CustomTab>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
