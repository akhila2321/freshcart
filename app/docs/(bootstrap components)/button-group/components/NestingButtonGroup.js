// import node module libraries
import {
  Row,
  Col,
  Tab,
  ButtonGroup,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { NestingButtonCode } from "data/code/ButtonGroupCode";

const NestingButtonGroup = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="button-nesting" className="mb-4">
          <h2>Button Nesting</h2>
          <p>
            Place a <code className="highlighter-rouge"> .btn-group </code>{" "}
            within another
            <code className="highlighter-rouge"> .btn-group </code> when you
            want dropdown menus mixed with a series of buttons.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey={"design"}>
              <ButtonGroup>
                <Button variant="primary">1</Button>
                <Button variant="primary">2</Button>
                <DropdownButton
                  as={ButtonGroup}
                  title="Dropdown"
                  id="btnGroupDrop1"
                >
                  <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={NestingButtonCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default NestingButtonGroup;
