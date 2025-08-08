// import node module libraries
import {
  Row,
  Col,
  Tab,
  Dropdown,
  ButtonGroup,
  DropdownButton,
  SplitButton,
} from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { DropdownSizeCode } from "data/code/DropdownCode";

const DropdownSize = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="sizing" className="mb-4">
          <h2>Sizing</h2>
          <p>
            Button dropdowns work with buttons of all sizes, including default
            and split dropdown buttons.
          </p>
        </div>

        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <div className="mb-3">
                {[DropdownButton, SplitButton].map((DropdownType, idx) => (
                  <DropdownType
                    as={ButtonGroup}
                    key={idx}
                    id={`dropdown-button-drop-${idx}`}
                    size="lg"
                    variant="secondary"
                    title={idx === 0 ? "Large button" : "Large split button"}
                    className="me-1 mb-2"
                  >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                      Something else here
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </DropdownType>
                ))}

                {[DropdownButton, SplitButton].map((DropdownType, idx) => (
                  <DropdownType
                    as={ButtonGroup}
                    key={idx}
                    id={`dropdown-button-drop-${idx}`}
                    size="sm"
                    variant="secondary"
                    title={idx === 0 ? "Small button" : "Small split button"}
                    className="mt-2 mt-xl-0 me-1"
                  >
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3">
                      Something else here
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                  </DropdownType>
                ))}
              </div>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={DropdownSizeCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default DropdownSize;
