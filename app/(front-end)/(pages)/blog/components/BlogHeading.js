// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

const BlogHeading = ({ heading, className }) => {
  return (
    <section className="mt-8">
      <Container>
        <Row>
          <Col className={className}>
            <h1 className="fw-bold">{heading}</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogHeading;
