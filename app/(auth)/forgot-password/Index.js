// import node module libraries
import { Container, Row } from "react-bootstrap";

// import sub components
import FeatureImage from "../components/FeatureImage";

// import custom components
import ForgotForm from "components/form/ForgotForm";

const Index = () => {
  return (
    <section className="my-lg-14 my-8">
      <Container>
        <Row className="justify-content-center align-items-center">
          <FeatureImage image={"/images/svg-graphics/fp-g.svg"} />
          <ForgotForm />
        </Row>
      </Container>
    </section>
  );
};

export default Index;
