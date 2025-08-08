'use client';

// import node module libraries
import Link from "next/link";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { ArrowRight } from "react-feather";
import { useSelector } from "react-redux";

export const metadata = {
  title: "Opps! Not Found | FreshCart - eCommerce Theme",
  keywords: "",
  description: "",
};

const NotFound = () => {
  const logo = useSelector((state) => state.app.logo)
  return (
    <section>
      <Container className="d-flex flex-column">
        <Row className="min-vh-100 justify-content-center align-items-center">
          <Col lg={{ offset: 1, span: 10 }} className="py-8 py-xl-0">
            <div className="mb-10 mb-xxl-0">
              <Link href="/">
                <Image src={logo} alt="" />
              </Link>
            </div>
            <Row className="justify-content-center align-items-center">
              <Col md={6}>
                <div className="mb-6 mb-lg-0">
                  <h1>Something’s wrong here...</h1>
                  <p className="mb-8">
                    We can’t find the page you’re looking for.
                    <br />
                    Check out our help center or head back to home.
                  </p>

                  <Button variant="dark">
                    Help Center
                    <ArrowRight size={15} />
                  </Button>

                  <Button variant="primary" href="/" className="ms-2" as={Link}>
                    Back to home
                  </Button>
                </div>
              </Col>
              <Col md={6}>
                <div>
                  <Image
                    src="/images/svg-graphics/error.svg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NotFound;
