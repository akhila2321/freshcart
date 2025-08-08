// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

// import custom components
import CompanyFeaturedCard2 from "components/cards/CompanyFeaturedCard2";

// import required data files
import { companyFeaturedData } from "data/CompanyFeaturedData";

const CompanyFeatures = () => {
  return (
    <section className="my-lg-14 my-8">
      <Container>
        <Row className="align-items-center">
          {companyFeaturedData.map((item, index) => (
            <Col key={item.id} lg={4} md={6} xs={12}>
              <CompanyFeaturedCard2
                item={item}
                className={`${index != 2 && index != 5 ? "border-end-lg" : ""}`}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CompanyFeatures;
