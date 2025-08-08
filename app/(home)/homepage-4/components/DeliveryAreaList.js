// import node module libraries
import { Container, Row, Col, Button } from "react-bootstrap";
import { MapPin } from "react-feather";

// import sub components
import AreaList from "./AreaList";

// import required data files
import { deliveryLcationsData } from "data/DeliveryLocationData";

const DeliveryAreaList = () => {
  const columns = 5; // You can adjust the number of columns
  const itemsPerColumn = Math.ceil(deliveryLcationsData.length / columns);

  return (
    <section className="py-lg-14 py-8 bg-light">
      <Container>
        <Row className="align-items-center mb-10">
          <Col md={8}>
            <div className="d-flex">
              <div className="mt-1">
                <MapPin size={24} className="text-primary" />
              </div>
              <div className="ms-3">
                <h3 className="mb-0">Areas we deliver to</h3>
                <p className="mb-0">
                  Find the best store products in your area with discount.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} className="text-end d-none d-md-block">
            <Button variant="primary">View All City</Button>
          </Col>
        </Row>

        <Row lg={5} md={3} xs={2}>
          {Array.from({ length: columns }).map((_, columnIndex) => (
            <Col key={columnIndex}>
              <AreaList
                areaList={deliveryLcationsData.slice(
                  columnIndex * itemsPerColumn,
                  (columnIndex + 1) * itemsPerColumn
                )}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DeliveryAreaList;
