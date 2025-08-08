// import node module libraries
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";

const NewsLetterCTA = ({ data }) => {
  const { title, desc, discount, discText, image } = data;

  return (
    <section
      className="bg-dark"
      style={{
        backgroundImage: "url(/images/svg-graphics/pattern.svg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <Row>
          <Col lg={{ span: 10, offset: 1 }}>
            <Row className="align-items-center">
              <Col md={6}>
                <div className="text-white mt-8 mt-lg-0">
                  <span>
                    ${discount} {discText}
                  </span>
                  <h2 className="h2 text-white my-4">{title}</h2>
                  <p className="text-white-50">{desc}</p>

                  <Row className="g-3 needs-validation">
                    <Col xs={6}>
                      <Form.Label
                        htmlFor="emailAddress"
                        className="visually-hidden"
                      >
                        Email Address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        id="emailAddress"
                        placeholder="Enter Email Address"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter email.
                      </div>
                    </Col>

                    <Col xs="auto">
                      <Button type="submit" variant="primary" className="mb-3">
                        Sign Up
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col md={6}>
                <div className="text-center">
                  <Image src={image} alt="" className="img-fluid" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetterCTA;
