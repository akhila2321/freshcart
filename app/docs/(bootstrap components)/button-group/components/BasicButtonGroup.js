// import node module libraries
import { Row, Col, Tab, ButtonGroup, Button } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { BasicExampleCode, BasicExampleCode2 } from "data/code/ButtonGroupCode";

const BasicButtonGroup = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="button" className="mb-4">
          <h2>Basic example</h2>
          <p>
            Wrap a series of buttons with{" "}
            <code className="highlighter-rouge"> .btn </code> in
            <code className="highlighter-rouge"> .btn-group </code>. Add on
            optional JavaScript radio and checkbox style behavior with plugin
          </p>
        </div>
        {/* Basic Example */}
        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey={"design"}>
              <ButtonGroup>
                <Button variant="primary">Left</Button>
                <Button variant="primary">Middle</Button>
                <Button variant="primary">Right</Button>
              </ButtonGroup>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={BasicExampleCode} />
            </Tab.Pane>
          </CustomTab>
        </div>

        {/* Active Example */}
        <div>
          <p>
            These classes can also be added to groups of links, as an
            alternative to the navigation components
          </p>
        </div>

        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey={"design"}>
              <ButtonGroup>
                <Button variant="primary" active>
                  Active link
                </Button>
                <Button variant="primary">Link</Button>
                <Button variant="primary">Link</Button>
              </ButtonGroup>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={BasicExampleCode2} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default BasicButtonGroup;
