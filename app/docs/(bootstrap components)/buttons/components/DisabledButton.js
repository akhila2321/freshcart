// import node module libraries
import { Row, Col, Button, Tab } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { DisabledButtonCode } from "data/code/ButtonCode";

const DisabledButton = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="disabled-state" className="mb-4">
          <h2>Disabled state</h2>
          <p>
            Make buttons look inactive by adding the
            <code className="highlighter-rouge"> disabled </code>
            boolean attribute to any
            <code className="highlighter-rouge"> &lt;button&gt; </code>
            element.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey="design">
              <Button variant="primary" disabled>
                Primary button
              </Button>{" "}
              <Button variant="secondary" disabled>
                Button
              </Button>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey="code">
              <HighlightCode code={DisabledButtonCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default DisabledButton;
