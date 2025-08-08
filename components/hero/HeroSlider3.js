// import node module libraries
import { Container } from "react-bootstrap";
import Slider from "react-slick";

// import required data files
import { heroSlider3Data } from "data/HeroSliderData";
import { heroSliderThreeSettings } from "data/SliderSettings";

// import helper utility file
import { createMarkup } from "helper/utils";

const HeroSlider3 = () => {
  return (
    <section className="mt-8">
      <Container>
        <Slider {...heroSliderThreeSettings} className="hero-slider">
          {heroSlider3Data.map((item) => (
            <div
              dangerouslySetInnerHTML={createMarkup(item.content)}
              key={item.id}
            />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default HeroSlider3;
