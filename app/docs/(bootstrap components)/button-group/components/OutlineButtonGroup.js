// import node module libraries
import { Row, Col, Tab, ButtonGroup, Button } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { OutlineButtonGroupCode } from "data/code/ButtonGroupCode";

const OutilneButtonGroup = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="mixed-outline-styles" className="mb-4">
          <h2>Outline Styles</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey={"design"}>
              <ButtonGroup>
                <Button variant="outline-primary">Left</Button>
                <Button variant="outline-primary">Middle</Button>
                <Button variant="outline-primary">Right</Button>
              </ButtonGroup>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={OutlineButtonGroupCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default OutilneButtonGroup;
