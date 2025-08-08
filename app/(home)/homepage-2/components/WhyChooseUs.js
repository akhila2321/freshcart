"use client";
// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

// import custom components
import CompanyFeatureCard from "components/cards/CompanyFeatureCard";

// import require data files
import { whyChooseData } from "data/WhyChooseData";

const WhyChooseUs = () => {
  return (
    <section className="my-lg-14 my-8">
      <Container>
        <Row>
          {whyChooseData.map((item) => (
            <Col md={6} lg={3} key={item.id}>
              <CompanyFeatureCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
