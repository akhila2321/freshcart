// import node module libraries
import { useParse } from "hooks/useParse";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const WelcomeCTA = ({ data }) => {
  const { title, desc, image, actionLabel, actionLink } = data;

  const { textContent } = useParse(desc);

  return (
    <section className="mt-8">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="bg-light d-lg-flex justify-content-between align-items-center py-6 py-lg-3 px-8 text-center text-lg-start rounded">
              <div className="d-lg-flex align-items-center">
                <Image src={image} alt="" className="img-fluid" />

                <div className="ms-lg-4">
                  <h1 className="fs-2 mb-1">{title}</h1>
                  {textContent}
                </div>
              </div>
              <div className="mt-3 mt-lg-0">
                <Button href={actionLink} variant="dark">
                  {actionLabel}
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WelcomeCTA;
