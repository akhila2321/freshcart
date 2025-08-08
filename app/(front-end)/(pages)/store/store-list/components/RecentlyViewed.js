// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

// import custom components
import StoreList from "components/store/StoreList";

// import required data files
import { storeData } from "data/StoreData";

const RecentlyViewed = () => {
  return (
    <section className="mb-lg-14 mb-8">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="mb-6">
              <h3 className="mb-0">Recently viewed</h3>
            </div>
          </Col>
        </Row>

        <Row xs={1} md={2} lg={3} className="g-4 g-lg-4">
          <StoreList stores={storeData.slice(3)} variant={1} />
        </Row>
      </Container>
    </section>
  );
};

export default RecentlyViewed;
