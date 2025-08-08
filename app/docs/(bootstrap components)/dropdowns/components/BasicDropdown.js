// import node module libraries
import { Row, Col, Tab, Dropdown } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { BasicDropdownCode } from "data/code/DropdownCode";

const BasicDropdown = () => {
  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="basic" className="mb-4">
          <h2>Basic</h2>
        </div>

        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdownMenuButton">
                  Dropdown Button
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Another action</Dropdown.Item>
                  <Dropdown.Item href="#">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={BasicDropdownCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default BasicDropdown;
