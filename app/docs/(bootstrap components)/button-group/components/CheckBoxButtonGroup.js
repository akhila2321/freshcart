// import node module libraries
import {
  Row,
  Col,
  Tab,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
  CheckBoxButtonGroupCode,
  RadioButtonGroupCode,
} from "data/code/ButtonGroupCode";

const CheckBoxButtonGroup = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="checkbox-and-radio-button-groups" className="mb-4">
          <h2>Checkbox and radio button groups</h2>
          <p>
            Combine button-like checkbox and radio toggle buttons into a
            seamless looking button group.
          </p>
        </div>
        <div className="mb-4">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey={"design"}>
              <ToggleButtonGroup
                type="checkbox"
                defaultValue={[1]}
                className="mb-2"
              >
                <ToggleButton
                  id="tbg-check-1"
                  value={1}
                  variant="outline-primary"
                >
                  Checkbox 1
                </ToggleButton>
                <ToggleButton
                  id="tbg-check-2"
                  value={2}
                  variant="outline-primary"
                >
                  Checkbox 2
                </ToggleButton>
                <ToggleButton
                  id="tbg-check-3"
                  value={3}
                  variant="outline-primary"
                >
                  Checkbox 3
                </ToggleButton>
              </ToggleButtonGroup>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={CheckBoxButtonGroupCode} />
            </Tab.Pane>
          </CustomTab>
        </div>

        {/* Radio Button Group */}
        <div className="mb-10">
          <CustomTab defaultActiveKey="design">
            <Tab.Pane title="Design" eventKey={"design"}>
              <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                <ToggleButton
                  id="btnradio1"
                  value={1}
                  variant="outline-primary"
                >
                  Radio 1
                </ToggleButton>
                <ToggleButton
                  id="btnradio2"
                  value={2}
                  variant="outline-primary"
                >
                  Radio 2
                </ToggleButton>
                <ToggleButton
                  id="btnradio3"
                  value={3}
                  variant="outline-primary"
                >
                  Radio 3
                </ToggleButton>
              </ToggleButtonGroup>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={RadioButtonGroupCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default CheckBoxButtonGroup;
