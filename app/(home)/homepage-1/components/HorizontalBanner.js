// import node module libraries
import { Container, Row } from "react-bootstrap";

// import custom components
import HorizontalCTA from "components/cta/HorizontalCTA";

// import require data files
import { horizontalCTAData } from "data/CTAData";

const HorizontalBanner = () => {
  return (
    <section>
      <Container>
        <Row>
          {horizontalCTAData.map((item) => (
            <HorizontalCTA item={item} key={item.id} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default HorizontalBanner;
