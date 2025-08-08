// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

// import sub components
import HomeSidebar from "./HomeSidebar";

const HomeLayout = ({ children }) => {
  return (
    <div className="mt-lg-12 mb-lg-14 mb-8">
      <Container>
        <Row>
          <Col xl={3} lg={4} md={4} className="mb-6 mb-md-0" as="aside">
            <HomeSidebar />
          </Col>
          <Col xl={9} lg={8} md={12} className="mb-6 mb-md-0">
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeLayout;
