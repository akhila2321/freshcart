// import node module libraries
import {
  Row,
  Col,
  Tab,
  ButtonGroup,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { VerticalButtonGroupCode } from "data/code/ButtonGroupCode";

const VerticalButtonGroup = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="vertical-variation" className="mb-4">
          <h2>Vertical variation</h2>
          <p>
            Make a set of buttons appear vertically stacked rather than
            horizontally.
            <strong>Split button dropdowns are not supported here.</strong>
          </p>
        </div>

        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey={"design"}>
              <ButtonGroup vertical>
                <Button variant="primary">Button</Button>
                <Button variant="primary">Button</Button>

                <DropdownButton
                  as={ButtonGroup}
                  title="Dropdown"
                  id="btnGroupVerticalDrop1"
                >
                  <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>

                <Button variant="primary">Button</Button>
                <Button variant="primary">Button</Button>

                <DropdownButton
                  as={ButtonGroup}
                  title="Dropdown"
                  id="btnGroupVerticalDrop2"
                >
                  <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>

                <DropdownButton
                  as={ButtonGroup}
                  title="Dropdown"
                  id="btnGroupVerticalDrop3"
                >
                  <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
                <DropdownButton
                  as={ButtonGroup}
                  title="Dropdown"
                  id="btnGroupVerticalDrop4"
                >
                  <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={VerticalButtonGroupCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default VerticalButtonGroup;
