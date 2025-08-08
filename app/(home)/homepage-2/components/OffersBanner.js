// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

// import custom components
import OffersCTA from "components/cta/OffersCTA";

// import required data files
import { offersData } from "data/OffersData";

const OffersBanner = () => {
  return (
    <section className="mt-8">
      <Container>
        <div className="table-responsive-xl pb-6 pb-xl-0">
          <Row className="flex-nowrap">
            {offersData.map((item) => (
              <Col xs={12} xl={4} lg={6} key={item.id}>
                <OffersCTA data={item} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default OffersBanner;
