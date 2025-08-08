// import node module libraries
import {
  Row,
  Col,
  Tab,
  DropdownButton,
  ButtonGroup,
  Dropdown,
} from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { DropdownOptionCode } from "data/code/DropdownCode";

const DropdownOptions = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="options" className="mb-4">
          <h2>Options</h2>
          <p>The best part is you can do this with any button variant, too:</p>
          <div className="mt-4" id="colors">
            <h3 className="fw-semibold mb-1">Color</h3>
            <p>
              The best part is you can do this with any button variant, too:
            </p>
          </div>
        </div>

        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              {[
                "Primary",
                "Secondary",
                "Success",
                "Info",
                "Warning",
                "Danger",
              ].map((variant) => (
                <DropdownButton
                  as={ButtonGroup}
                  key={variant}
                  id={`dropdown-variants-${variant}`}
                  variant={variant.toLowerCase()}
                  title={variant}
                  className="me-1 mb-1"
                >
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3"> Something else</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </DropdownButton>
              ))}
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={DropdownOptionCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default DropdownOptions;
