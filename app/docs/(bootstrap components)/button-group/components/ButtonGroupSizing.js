// import node module libraries
import { Row, Col, Tab, ButtonGroup, Button } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { ButtonGroupSizingCode } from "data/code/ButtonGroupCode";

const ButtonGroupSizing = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="button-sizing" className="mb-4">
          <h2>Sizing</h2>
          <p>
            Instead of applying button sizing classes to every button in a
            group, just add{" "}
            <code className="highlighter-rouge">.btn-group-*</code> to each{" "}
            <code className="highlighter-rouge">.btn-group</code>, including
            each one when nesting multiple groups.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey={"design"}>
              <ButtonGroup size="lg" className="mb-2">
                <Button variant="primary">Left</Button>
                <Button variant="primary">Middle</Button>
                <Button variant="primary">Right</Button>
              </ButtonGroup>
              <br />
              <ButtonGroup className="mb-2">
                <Button variant="primary">Left</Button>
                <Button variant="primary">Middle</Button>
                <Button variant="primary">Right</Button>
              </ButtonGroup>
              <br />
              <ButtonGroup size="sm" className="mb-2">
                <Button variant="primary">Left</Button>
                <Button variant="primary">Middle</Button>
                <Button variant="primary">Right</Button>
              </ButtonGroup>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={ButtonGroupSizingCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default ButtonGroupSizing;
