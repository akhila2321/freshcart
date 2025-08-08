export const FeatureOneCode = `
 "use client";
// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

// import custom components
import CompanyFeaturedCard2 from "components/cards/CompanyFeaturedCard2";

// import required data file
import { companyFeaturedData } from "data/CompanyFeaturedData";

const Page = () => {
  return (
    <section className="my-lg-14 my-8">
      <Container>
        <Row className="align-items-center">
          {companyFeaturedData.map((item, index) => (
            <Col key={item.id} lg={4} md={6} xs={12}>
              <CompanyFeaturedCard2
                item={item}
                className={\`\${index != 2 && index != 5 ? "border-end-lg" : ""}\`}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Page;

`.trim();

export const FeatureTwoCode = `
"use client";
// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

// import custom components
import CompanyFeatureCard from "components/cards/CompanyFeatureCard";

// import required data files
import { whyChooseData } from "data/WhyChooseData";

const Page = () => {
  return (
    <section class="my-lg-14 my-8">
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

export default Page;

`.trim();
