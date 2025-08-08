// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

// import sub components
import StoreSidebar from "./StoreSidebar";

const StoreSidebarLayout = ({ children }) => {
  return (
    <section className="mb-lg-14 mb-8 mt-8">
      <Container>
        <Row>
          <Col xs={12} lg={3} md={4} className="mb-4 mb-md-0">
            <StoreSidebar />
          </Col>
          <Col xs={12} lg={9} md={8}>
            {children}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StoreSidebarLayout;
