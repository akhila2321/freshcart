// import node module libraries
import { Container } from "react-bootstrap";

// import custom components
import HeroSlider from "components/hero/HeroSlider";

const HomeSlider = () => {
  return (
    <section className="mt-8">
      <Container>
        <HeroSlider />
      </Container>
    </section>
  );
};

export default HomeSlider;
