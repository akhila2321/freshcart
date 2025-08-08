"use client";
// import node module libraries
import { Container, Row, Col } from "react-bootstrap";

// import custom components
import ContactForm from "components/form/ContactForm";

const Index = () => {
  return (
    <section className="my-lg-14 my-8">
      <Container>
        <Row>
          <Col lg={{ offset: 2, span: 8 }} xs={12}>
            <div className="mb-8">
              <h1 className="h3">Retailer Inquiries</h1>
              <p className="lead mb-0">
                This form is for retailer inquiries only. For all other customer
                or shopper support requests, please visit the links below this
                form.
              </p>
            </div>

            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Index;
