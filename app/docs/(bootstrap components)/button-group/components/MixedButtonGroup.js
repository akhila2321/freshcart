// import node module libraries
import { Row, Col, Tab, ButtonGroup, Button } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data files
import { MixedButtonGroupCode } from "data/code/ButtonGroupCode";

const MixedButtonGroup = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="mixed-styles" className="mb-4">
          <h2>Mixed Styles</h2>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey={"design"}>
              <ButtonGroup>
                <Button variant="danger">Left</Button>
                <Button variant="warning">Middle</Button>
                <Button variant="success">Right</Button>
              </ButtonGroup>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={MixedButtonGroupCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default MixedButtonGroup;
