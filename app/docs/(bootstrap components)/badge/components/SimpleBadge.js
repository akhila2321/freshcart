// import node module libraries
import { Row, Col, Tab, Badge } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { SimpleBadgeCode } from "data/code/BadgeCode";

const SimpleBadge = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="simple-badge" className="mb-4">
          <h2>Simple Badge</h2>
          <p>
            Badges scale to match the size of the immediate parent element by
            using relative font sizing and
            <code className="highlighter-rouge"> em </code>
            units.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey="design">
              <h1>
                Example heading <Badge bg="secondary">New</Badge>
              </h1>
              <h2>
                Example heading <Badge bg="secondary">New</Badge>
              </h2>
              <h3>
                Example heading <Badge bg="secondary">New</Badge>
              </h3>
              <h4>
                Example heading <Badge bg="secondary">New</Badge>
              </h4>
              <h5>
                Example heading <Badge bg="secondary">New</Badge>
              </h5>
              <h6>
                Example heading <Badge bg="secondary">New</Badge>
              </h6>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey="code">
              <HighlightCode code={SimpleBadgeCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default SimpleBadge;
