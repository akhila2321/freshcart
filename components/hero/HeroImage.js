// import node module libraries
import Link from "next/link";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { MapPin } from "react-feather";

const HeroImage = () => {
  return (
    <section
      className="py-lg-16 py-10"
      style={{
        backgroundImage: "url(/images/banner/banner-4.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Row>
          <Col xl={4} lg={6} md={7}>
            <Card className="border-0  shadow ">
              <Card.Body className="p-6">
                <div className="mb-4">
                  <MapPin size={24} className="text-danger" />
                  <h1 className="mt-3 mb-0 h4">
                    Check what&apos;s in your local store
                  </h1>
                  <small>See delivery and collection options</small>
                </div>

                <Form onSubmit={(e) => e.preventDefault()} method="post">
                  <Row className="g-3">
                    <Col>
                      <Form.Label htmlFor="postcod" className="visually-hidden">
                        Postcode
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="postcod"
                        placeholder="Enter Postcode"
                        maxLength={6}
                      />
                    </Col>
                    <Col xs={"auto"}>
                      <Button type="submit" variant="primary">
                        Check
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
            <div className="mt-3">
              <small className="text-white">
                Hello, Sign in for the best experience. New to Freshcart?
                <Link href="#" className="text-white ">
                  {" "}
                  Register
                </Link>
              </small>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroImage;
