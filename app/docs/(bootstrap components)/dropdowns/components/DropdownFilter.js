// import node module libraries
import { Fragment } from "react";
import { Row, Col, Tab, Dropdown, ButtonGroup, Button, Form, ListGroup, Badge } from "react-bootstrap";
import { Files, Film, ImageFill, Joystick, MusicNoteBeamed, Trash } from "react-bootstrap-icons";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
  DropdownAutoCloseCode,
  DropdownOffsetCode,
  DropdownWithColorFilterCode,
  DropdownWithIconCode,
} from "data/code/DropdownCode";

const DropdownFilter = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="dropdown-option" className="mb-4">
            <h2>Dropdown Option</h2>
            <p>
              Use <code>data-bs-offset</code> or <code>data-bs-reference</code>{" "}
              to change the location of the dropdown.
            </p>
          </div>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <div className="d-flex">
                  <Dropdown className="me-1">
                    <Dropdown.Toggle
                      variant="secondary"
                      id="dropdownMenuOffset"
                    >
                      Offset
                    </Dropdown.Toggle>
                    <Dropdown.Menu as="ul">
                      <Dropdown.Item as="li" href="">
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item as="li" href="">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item as="li" href="">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown as={ButtonGroup} drop="down">
                    <Button variant="secondary">Reference</Button>
                    <Dropdown.Toggle split variant="secondary" />
                    <Dropdown.Menu as="ul">
                      <Dropdown.Item as="li">Action</Dropdown.Item>
                      <Dropdown.Item as="li">Another action</Dropdown.Item>
                      <Dropdown.Item as="li">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item as="li">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={DropdownOffsetCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Auto Close Behavior */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="auto-close-behavior" className="mb-4">
            <h3 className="fw-semibold mb-1">Auto close behavior</h3>
            <p>
              By default, the dropdown menu is closed when clicking inside or
              outside the dropdown menu. You can use the <code>autoClose</code>{" "}
              option to change this behavior of the dropdown.
            </p>
          </div>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Dropdown as={ButtonGroup} className="mb-1 me-1" autoClose>
                  <Dropdown.Toggle variant="secondary" id="defaultDropdown">
                    Default dropdown
                  </Dropdown.Toggle>
                  <Dropdown.Menu as="ul">
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown as={ButtonGroup} className="mb-1" autoClose="outside">
                  <Dropdown.Toggle
                    variant="secondary"
                    id="dropdownMenuClickableOutside"
                  >
                    Clickable outside
                  </Dropdown.Toggle>
                  <Dropdown.Menu as="ul">
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown
                  as={ButtonGroup}
                  className="mb-1 me-1"
                  autoClose="inside"
                >
                  <Dropdown.Toggle
                    variant="secondary"
                    id="dropdownMenuClickableInside"
                  >
                    Clickable inside
                  </Dropdown.Toggle>
                  <Dropdown.Menu as="ul">
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown
                  as={ButtonGroup}
                  className="mb-1 me-1"
                  autoClose={false}
                >
                  <Dropdown.Toggle
                    variant="secondary"
                    id="dropdownMenuClickableInside"
                  >
                    Manual close
                  </Dropdown.Toggle>
                  <Dropdown.Menu as="ul">
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                    <Dropdown.Item as="li">Menu item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={DropdownAutoCloseCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Dropdown With Color Options */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="example" className="mb-4">
            <h2 className="fw-semibold mb-6">Examples</h2>
            <h3 className="fw-semibold mb-1 mt-6" id="filter-dropdown">
              With Filter
            </h3>
          </div>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <div className="d-flex gap-5" id="dropdownFilter">
                  <Dropdown.Menu
                    show
                    className="pt-0 mx-0 shadow overflow-hidden position-static d-block"
                    style={{ width: "280px" }}
                  >
                    <Form className="p-2 mb-2 bg-light border-bottom">
                      <Form.Control
                        type="search"
                        placeholder="Type to filter..."
                      />
                    </Form>
                    <ListGroup
                      as="ul"
                      bsPrefix="list-unstyled"
                      className="mb-0"
                    >
                      <Dropdown.Item
                        as="li"
                        className="d-flex align-items-center gap-2 py-2"
                      >
                        <Badge
                          bg="success"
                          className="d-inline-block icon-xs"
                        />
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item
                        as="li"
                        className="d-flex align-items-center gap-2 py-2"
                      >
                        <Badge
                          bg="primary"
                          className="d-inline-block icon-xs"
                        />
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item
                        as="li"
                        className="d-flex align-items-center gap-2 py-2"
                      >
                        <Badge bg="danger" className="d-inline-block icon-xs" />
                        Something else here
                      </Dropdown.Item>
                      <Dropdown.Item
                        as="li"
                        className="d-flex align-items-center gap-2 py-2"
                      >
                        <Badge bg="info" className="d-inline-block icon-xs" />
                        Something else here
                      </Dropdown.Item>
                    </ListGroup>
                  </Dropdown.Menu>

                  <Dropdown.Menu
                    show
                    className="border-0 pt-0 mx-0 shadow overflow-hidden position-static d-block"
                    style={{ width: "280px" }}
                    variant="dark"
                  >
                    <Form className="p-2 mb-2 bg-dark border-bottom border-dark">
                      <Form.Control
                        type="search"
                        placeholder="Type to filter..."
                      />
                    </Form>
                    <ListGroup
                      as="ul"
                      bsPrefix="list-unstyled"
                      className="mb-0"
                    >
                      <Dropdown.Item
                        as="li"
                        className="d-flex align-items-center gap-2 py-2"
                      >
                        <Badge
                          bg="success"
                          className="d-inline-block icon-xs"
                        />
                        Action
                      </Dropdown.Item>
                      <Dropdown.Item
                        as="li"
                        className="d-flex align-items-center gap-2 py-2"
                      >
                        <Badge
                          bg="primary"
                          className="d-inline-block icon-xs"
                        />
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item
                        as="li"
                        className="d-flex align-items-center gap-2 py-2"
                      >
                        <Badge bg="danger" className="d-inline-block icon-xs" />
                        Something else here
                      </Dropdown.Item>
                      <Dropdown.Item
                        as="li"
                        className="d-flex align-items-center gap-2 py-2"
                      >
                        <Badge bg="info" className="d-inline-block icon-xs" />
                        Something else here
                      </Dropdown.Item>
                    </ListGroup>
                  </Dropdown.Menu>
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={DropdownWithColorFilterCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Dropdown with icon options */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4">
            <h3 className="fw-semibold mb-1" id="icon-dropdown">
              With Icon
            </h3>
          </div>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <div className="d-flex gap-5 " id="dropdownIcons">
                  <Dropdown.Menu
                    show
                    className="mx-0 shadow d-block position-static"
                    style={{ width: "220px" }}
                  >
                    <Dropdown.Item
                      as="li"
                      className="d-flex gap-2 align-items-center"
                    >
                      <Files size={16} />
                      Documents
                    </Dropdown.Item>
                    <Dropdown.Item
                      as="li"
                      className="d-flex gap-2 align-items-center"
                    >
                      <ImageFill size={16} />
                      Photos
                    </Dropdown.Item>
                    <Dropdown.Item
                      as="li"
                      className="d-flex gap-2 align-items-center"
                    >
                      <Film size={16} />
                      Movies
                    </Dropdown.Item>
                    <Dropdown.Item
                      as="li"
                      className="d-flex gap-2 align-items-center"
                    >
                      <MusicNoteBeamed size={16} />
                      Music
                    </Dropdown.Item>
                    <Dropdown.Item
                      as="li"
                      className="d-flex gap-2 align-items-center"
                    >
                      <Joystick size={16} />
                      Games
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      as="li"
                      className="d-flex gap-2 align-items-center"
                      href=""
                    >
                      <Trash size={16} />
                      Trash
                    </Dropdown.Item>
                  </Dropdown.Menu>

                  <Dropdown.Menu
                    show
                    className="mx-0 border-0 shadow d-block position-static"
                    style={{ width: "220px" }}
                    variant="dark"
                  >
                    <Dropdown.Item
                      as="li"
                      className="d-flex gap-2 align-items-center"
                    >
                      <Files size={16} />
                      Documents
                    </Dropdown.Item>
                    <Dropdown.Item
                      as="li"
                      className="d-flex gap-2 align-items-center"
                    >
                      <ImageFill size={16} />
                      Photos
                    </Dropdown.Item>
                    <Dropdown.Item
                      as="li"
                      className="d-flex gap-2 align-items-center"
                    >
                      <Film size={16} />
                      Movies
                    </Dropdown.Item>
                    <Dropdown.Item
                      as="li"
                      className="d-flex gap-2 align-items-center"
                    >
                      <MusicNoteBeamed size={16} />
                      Music
                    </Dropdown.Item>
                    <Dropdown.Item
                      as="li"
                      className="d-flex gap-2 align-items-center"
                    >
                      <Joystick size={16} />
                      Games
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      as="li"
                      className="d-flex gap-2 align-items-center"
                    >
                      <Trash size={16} />
                      Trash
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </div>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={DropdownWithIconCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default DropdownFilter;
