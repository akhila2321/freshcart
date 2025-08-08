// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

const FreshComponentLayout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col
          xxl={{ offset: 2, span: 6 }}
          xl={{ offset: 1, span: 7 }}
          md={12}
          sm={12}
          xs={12}
        >
          <div className="docs-content mx-xxl-9">{children}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default FreshComponentLayout;
