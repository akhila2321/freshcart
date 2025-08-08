// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

// import custom components
import StoreList from "components/store/StoreList";

// import required data files
import { storeData } from "data/StoreData";

const VendorList = () => {
  return (
    <section className="mt-6 mb-lg-14 mb-8">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="mb-4">
              <h6>
                We have
                <span className="text-primary"> {storeData.length} </span>
                vendors now
              </h6>
            </div>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={3} className="g-4 g-lg-4">
          <StoreList stores={storeData} variant={1} />
        </Row>
      </Container>
    </section>
  );
};

export default VendorList;
