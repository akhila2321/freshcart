// import node module libraries
import Slider from "react-slick";
import { Image } from "react-bootstrap";

// import required data file
import { ourTeamData } from "data/OurTeamData";
import { ourTeamSliderSettings } from "data/SliderSettings";

const TeamSlider = () => {
  return (
    <Slider {...ourTeamSliderSettings} className="team-slider mx-4">
      {ourTeamData.map((item) => (
        <div className="item" key={item.id}>
          <div className="bg-light rounded">
            <div className="p-6">
              <h5 className="h6 mb-0">{item.name}</h5>
              <small>{item.position}</small>
            </div>

            <Image src={item.avatar} alt="" className="img-fluid" />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TeamSlider;
