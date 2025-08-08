// import node module libraries
import { Row, Col, Tab, Placeholder } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { PlaceholderColorCode } from "data/code/PlaceholderCode";

const PlaceholderColor = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="color" className="mb-4">
          <h2>Color</h2>
          <p>
            By default, the
            <code> placeholder </code>
            uses
            <code> currentColor </code>. This can be overridden with a custom
            color or utility class.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <Placeholder xs={12} bg="primary" />
              <Placeholder xs={12} bg="secondary" />
              <Placeholder xs={12} bg="success" />
              <Placeholder xs={12} bg="danger" />
              <Placeholder xs={12} bg="warning" />
              <Placeholder xs={12} bg="info" />
              <Placeholder xs={12} bg="light" />
              <Placeholder xs={12} bg="dark" />
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={PlaceholderColorCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default PlaceholderColor;
