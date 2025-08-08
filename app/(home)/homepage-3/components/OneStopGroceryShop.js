// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

// import custom components
import DiscountOnShareCTA from "components/cta/DiscountOnShareCTA";

// import requied data file
import { discountOnShareData } from "data/CTAData";

const OneStopGroceryShop = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col xs={12}>
            <DiscountOnShareCTA data={discountOnShareData} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OneStopGroceryShop;
