// import node module libraries
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";

const CompanyFeatureWithCounter = ({ data }) => {
  if (!data) return null;

  const { title, desc, stats } = data;
  return (
    <section className="bg-success py-14">
      <Container>
        <Row>
          <Col lg={{ offset: 1, span: 10 }}>
            <Row>
              <Col xl={4} md={6}>
                <div className="text-white me-8 mb-12">
                  <h2 className="text-white mb-4">{title}</h2>
                  <p>{desc}</p>
                </div>
              </Col>
              <Row xs={2} md={4}>
                {stats?.map((item) => (
                  <Col className="mb-4 mb-md-0" key={item.id}>
                    <h3 className="display-5 fw-bold text-white mb-0">
                      <CountUp
                        start={0}
                        end={Number(item.value)}
                        suffix={item.suffix}
                      />
                    </h3>
                    <span className="fs-6 text-white">{item.title}</span>
                  </Col>
                ))}
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CompanyFeatureWithCounter;
