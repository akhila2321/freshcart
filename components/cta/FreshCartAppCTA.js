// import node module libraries
import { Row, Col, Image, ListGroup, Form, Button } from "react-bootstrap";
import Link from "next/link";

const FreshCartAppCTA = () => {
  return (
    <Row className="align-items-center">
      <Col lg={{ span: 4, offset: 2 }} md={6}>
        <div className="text-center">
          <Image src="/images/png/iphone-2.png" alt="" className="img-fluid" />
        </div>
      </Col>

      <Col lg={6} md={6}>
        <div className="mb-6">
          <div className="mb-7">
            <h2>Get the FreshCart app</h2>
            <p className="mb-0">
              We will send you a link, open it on your phone to download the
              app.
            </p>
          </div>
          <div className="mb-5">
            <Form.Check inline>
              <Form.Check.Input
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <Form.Check.Label htmlFor="flexRadioDefault1">
                Email
              </Form.Check.Label>
            </Form.Check>

            <Form.Check inline>
              <Form.Check.Input
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                defaultChecked
              />
              <Form.Check.Label htmlFor="flexRadioDefault2">
                Phone
              </Form.Check.Label>
            </Form.Check>

            <Row className="g-3 mt-1">
              <Col lg={6} xs={7}>
                <Form.Control type="text" placeholder="Phone" />
              </Col>

              <Col xs={"auto"}>
                <Button type="submit" variant="primary" className="mb-3">
                  Share app link
                </Button>
              </Col>
            </Row>
          </div>
          <div>
            <small>Download app from</small>
            <ListGroup bsPrefix="list-inline mb-0 mt-3" as="ul">
              <ListGroup.Item bsPrefix="list-inline-item" as="li">
                <Link href="#!">
                  <Image
                    src="/images/appbutton/appstore-btn.svg"
                    alt=""
                    style={{ width: "140px" }}
                  />
                </Link>
              </ListGroup.Item>
              <ListGroup.Item bsPrefix="list-inline-item" as="li">
                <Link href="#!">
                  <Image
                    src="/images/appbutton/googleplay-btn.svg"
                    alt=""
                    style={{ width: "140px" }}
                  />
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default FreshCartAppCTA;
