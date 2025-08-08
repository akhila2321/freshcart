// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

// import custom components
import SidebarContent from "components/docs/SidebarContent";

const DocsInnerLayout = ({ children, isOpen = true, links }) => {
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

        {isOpen && (
          <Col
            xl={2}
            lg={2}
            md={6}
            sm={12}
            xs={12}
            className="d-none d-xl-block position-fixed end-0"
          >
            <SidebarContent data={links} />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default DocsInnerLayout;
