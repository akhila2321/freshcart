// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

// import custom components
import StoreList from "components/store/StoreList";

// import required data files
import { storeData } from "data/StoreData";

const VendorList = () => {
  // Copied first entries to create 12 length array
  const newArray = storeData.concat(storeData.slice(1, 4));

  return (
    <section className="mt-8 mb-lg-14 mb-8">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="mb-3">
              <h6>
                We have
                <span className="text-primary"> {newArray.length} </span>
                vendors now
              </h6>
            </div>
          </Col>
        </Row>

        <Row xs={1} lg={4} md={3} className="g-4 g-lg-4">
          <StoreList stores={newArray} />
        </Row>
      </Container>
    </section>
  );
};

export default VendorList;
