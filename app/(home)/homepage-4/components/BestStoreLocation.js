// import node module libraries
import { Container, Row, Col } from "react-bootstrap";
import { Shop } from "react-bootstrap-icons";
import { ChevronRight } from "react-feather";
import Link from "next/link";

// import custom components
import StoreList from "components/store/StoreList";

// import required data files
import { storeData } from "data/StoreData";

const BestStoreLocation = () => {
  return (
    <section className="my-lg-14 my-8">
      <Container>
        <Row className="align-items-center mb-8">
          <Col md={8} xs={12}>
            <div className="d-flex">
              <div className="mt-1">
                <Shop className="text-primary" size={24} />
              </div>
              <div className="ms-3">
                <h3 className="mb-0">Best stores in Locations</h3>
                <p className="mb-0">
                  Find the best store products in your area with discount.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} xs={12} className="text-end d-none d-md-block">
            <Link href="">
              All stores
              <ChevronRight size={18} />
            </Link>
          </Col>
        </Row>

        {/* Store Locations */}
        <Row xs={1} lg={3} md={3} className="g-4 g-lg-4">
          <StoreList stores={storeData.slice(0, 3)} variant={0} />
        </Row>
      </Container>
    </section>
  );
};

export default BestStoreLocation;
