// import node module libraries
import { Row, Col, Tab, Placeholder } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { PlaceholderSizeCode } from "data/code/PlaceholderCode";

const PlaceholderSize = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="sizing-placeholder" className="mb-4">
          <h2>Sizing</h2>
          <p>
            The size of
            <code> .placeholder </code>s are based on the typographic style of
            the parent element. Customize them with sizing modifiers:
            <code> .placeholder-lg </code>,<code> .placeholder-sm </code>, or
            <code> .placeholder-xs </code>.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              className="bg-light p-4"
            >
              <Placeholder xs={12} size="lg" />
              <Placeholder xs={12} />
              <Placeholder xs={12} size="sm" />
              <Placeholder xs={12} size="xs" />
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={PlaceholderSizeCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default PlaceholderSize;
