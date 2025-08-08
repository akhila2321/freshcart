// import node module libraries
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

// import custom components
import AboutCTA from "components/cta/AboutCTA";

// import required data file
import { aboutCTAData } from "data/CTAData";
const AboutFeatured = () => {
  return (
    <Row className="mb-12">
      <Col xs={12}>
        <div className="mb-8">
          <h2>Ready to get started?</h2>
        </div>
      </Col>
      {aboutCTAData.map((item) => (
        <Col md={4} key={item.id}>
          <AboutCTA data={item} />
        </Col>
      ))}

      <Col>
        <p>
          For assistance using Freshcart services, please visit our
          <Link href="#"> Help Center</Link>
        </p>
      </Col>
    </Row>
  );
};

export default AboutFeatured;
