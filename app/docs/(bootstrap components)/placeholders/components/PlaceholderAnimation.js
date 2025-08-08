// import node module libraries
import { Row, Col, Tab, Placeholder } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { PlaceholderAnimationCode } from "data/code/PlaceholderCode";

const PlaceholderAnimation = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="animation" className="mb-4">
          <h2>Animation</h2>
          <p>
            Animate placeholders with
            <code> .placeholder-glow </code>
            or
            <code> .placeholder-wave </code>
            to better convey the perception of something being
            <em> actively </em>
            loaded.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={12} />
              </Placeholder>
              <Placeholder as="p" animation="wave" className="mb-0">
                <Placeholder xs={12} />
              </Placeholder>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={PlaceholderAnimationCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default PlaceholderAnimation;
