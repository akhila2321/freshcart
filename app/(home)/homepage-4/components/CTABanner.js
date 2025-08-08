// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

// import custom components
import ZoomableCTA from "components/cta/ZoomableCTA";

// import required data files
import { ctaBannerData } from "data/CTAData";

const CTABanner = () => {
  return (
    <div className="my-lg-14 my-8">
      <Container>
        <div className="table-responsive-xxl pb-6 pb-lg-0">
          <Row className="flex-nowrap">
            {ctaBannerData.map((item) => (
              <Col key={item.id}>
                <ZoomableCTA data={item} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default CTABanner;
