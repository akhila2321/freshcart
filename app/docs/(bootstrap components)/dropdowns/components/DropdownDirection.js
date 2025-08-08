// import node module libraries
import {
  Row,
  Col,
  Tab,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Button,
} from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data files
import { DropdownDirectionCode } from "data/code/DropdownCode";

const DropdownDirection = () => {

  //Dropdown Direction Array
  const directionArr = [
    { id: 1, title: "Dropup", direction: "up", type: "drop" },
    { id: 2, title: "Split dropup", direction: "up", type: "split" },
    { id: 3, title: "Dropright", direction: "end", type: "drop" },
    { id: 4, title: "Split dropright", direction: "end", type: "split" },
    { id: 5, title: "Dropleft", direction: "start", type: "drop" },
    { id: 6, title: "Split dropleft", direction: "down", type: "splitleft" },
  ];

  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="directions" className="mb-4">
          <h2>Directions</h2>
          <p>
            Trigger dropdown menus above elements by adding{" "}
            <code className="highlighter-rouge">.dropup</code>,
            <code className="highlighter-rouge">.dropleft</code>,
            <code className="highlighter-rouge">.dropright</code> to the parent
            element.
          </p>
        </div>

        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane title="Design" eventKey={"design"}>
              <div className="mb-1">
                {directionArr.map((item) => {
                  if (item.type.includes("splitleft")) {
                    return (
                      <Dropdown
                        as={ButtonGroup}
                        drop={item.direction}
                        key={item.title}
                        className="mb-1"
                      >
                        <Dropdown.Toggle
                          split
                          variant="secondary"
                        ></Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                          <Dropdown.Item eventKey="2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="3">
                            Something else here
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item eventKey="4">
                            Separated link
                          </Dropdown.Item>
                        </Dropdown.Menu>
                        <Button variant="secondary">Split dropleft</Button>
                      </Dropdown>
                    );
                  } else if (item.type.includes("split")) {
                    return (
                      <Dropdown
                        as={ButtonGroup}
                        drop={item.direction}
                        className="me-1 mb-1"
                        key={item.title}
                      >
                        <Button variant="secondary">{item.title}</Button>
                        <Dropdown.Toggle split variant="secondary" />
                        <Dropdown.Menu>
                          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                          <Dropdown.Item eventKey="2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="3">
                            Something else here
                          </Dropdown.Item>
                          <Dropdown.Divider />
                          <Dropdown.Item eventKey="4">
                            Separated link
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    );
                  } else {
                    return (
                      <DropdownButton
                        as={ButtonGroup}
                        drop={item.direction}
                        variant="secondary"
                        title={item.title}
                        className="me-1 mb-1"
                        key={item.title}
                      >
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3">
                          Something else here
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">
                          Separated link
                        </Dropdown.Item>
                      </DropdownButton>
                    );
                  }
                })}
              </div>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={DropdownDirectionCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default DropdownDirection;
