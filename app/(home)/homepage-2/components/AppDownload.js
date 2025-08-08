// import node module libraries
import { Container } from "react-bootstrap";

// import custom components
import FreshCartAppCTA from "components/cta/FreshCartAppCTA";

const AppDownload = () => {
  return (
    <section>
      <Container>
        <hr className="my-lg-14 my-8" />
        <FreshCartAppCTA />
      </Container>
      <hr className="my-lg-14 my-8" />
    </section>
  );
};

export default AppDownload;
