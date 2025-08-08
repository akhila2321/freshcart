// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

// import custom components
import UserSidebar from "components/sidebar/UserSidebar";

const UserLayout = ({ children }) => {
  return (
    <section>
      <Container>
        <Row>
          <UserSidebar />
          <Col lg={9} md={8} xs={12}>
            {children}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UserLayout;
