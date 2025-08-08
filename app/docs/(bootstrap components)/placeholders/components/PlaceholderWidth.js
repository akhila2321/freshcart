// import node module libraries
import { Row, Col, Tab, Placeholder } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { PlaceholderWidthCode } from "data/code/PlaceholderCode";

const PlaceholderWidth = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="width" className="mb-4">
          <h2>Width</h2>
          <p>
            You can change the
            <code> width </code>
            through grid column classes, width utilities, or inline styles.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <Placeholder xs={6} />
              <Placeholder className="w-75" />
              <Placeholder className="25%" />
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={PlaceholderWidthCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default PlaceholderWidth;
