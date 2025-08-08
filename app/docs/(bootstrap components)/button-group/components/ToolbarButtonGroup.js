// import node module libraries
import {
  Row,
  Col,
  Tab,
  ButtonToolbar,
  ButtonGroup,
  Button,
} from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { ToolbarButtonGroupCode } from "data/code/ButtonGroupCode";

const ToolbarButtonGroup = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="button-toolbar" className="mb-4">
          <h2>Button toolbar</h2>
          <p>
            Combine sets of button groups into button toolbars for more complex
            components. Use utility classes as needed to space out groups,
            buttons, and more.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey={"design"}>
              <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                  <Button variant="primary">1</Button>{" "}
                  <Button variant="primary">2</Button>{" "}
                  <Button variant="primary">3</Button>
                  <Button variant="primary">4</Button>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Second group">
                  <Button variant="primary">5</Button>{" "}
                  <Button variant="primary">6</Button>{" "}
                  <Button variant="primary">7</Button>
                </ButtonGroup>
                <ButtonGroup aria-label="Third group">
                  <Button variant="primary">8</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={ToolbarButtonGroupCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default ToolbarButtonGroup;
