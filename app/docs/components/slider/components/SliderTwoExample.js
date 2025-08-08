// import node module libraries
import { Row, Col, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";
import HeroSlider2 from "components/hero/HeroSlider2";
import BannerStyle1 from "./BannerStyle1";
import BannerStyle2 from "./BannerStyle2";

// import required data file
import { SliderTwoExampleCode } from "data/code/components-code/SliderCode";

const SliderTwoExample = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="" className="mb-4">
          <h2 className="mb-0">Slider #2</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <Row>
                <Col xxl={8} xl={7}>
                  <HeroSlider2 />
                </Col>
                <Col
                  xxl={4}
                  xl={5}
                  xs={12}
                  className="d-lg-flex d-xl-block gap-3 gap-xl-0"
                >
                  <BannerStyle1 />

                  <BannerStyle2 />
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={SliderTwoExampleCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default SliderTwoExample;
