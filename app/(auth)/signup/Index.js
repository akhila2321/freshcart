"use client";
// import node module libraries
import { Container, Row } from "react-bootstrap";

// import sub components
import FeatureImage from "../components/FeatureImage";

// import custom components
import SignUpForm from "components/form/SignUpForm";

const Index = () => {
  return (
    <section className="my-lg-14 my-8">
      <Container>
        <Row className="justify-content-center align-items-center">
          <FeatureImage />
          <SignUpForm />
        </Row>
      </Container>
    </section>
  );
};

export default Index;
