// import node module libraries
import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

// import custom components
import TeamSlider from "components/common/TeamSlider";

const LeadershipSlider = () => {
  return (
    <Fragment>
      <section className="mt-14">
        <Container>
          <Row>
            <Col md={{ offset: 1, span: 10 }}>
              <div className="mb-11">
                <h2>Our Leadership</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mb-14">
        <TeamSlider />
      </section>
    </Fragment>
  );
};

export default LeadershipSlider;
