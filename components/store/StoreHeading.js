// import node module libraries
import { Container, Row, Col, Image } from "react-bootstrap";

const StoreHeading = ({ heading, image }) => {
  return (
    <section className="mt-8">
      <Container>
        <Row className="row">
          <Col xs={12}>
            <div className="bg-light d-flex justify-content-between ps-md-10 ps-6 rounded">
              <div className="d-flex align-items-center">
                <h1 className="mb-0 fw-bold">{heading || "Stores"}</h1>
              </div>
              <div className="py-6">
                <Image
                  src={"/images/svg-graphics/store-graphics.svg" || image}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StoreHeading;
