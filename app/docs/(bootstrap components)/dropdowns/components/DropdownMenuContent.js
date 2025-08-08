// import node module libraries
import { Fragment } from "react";
import Link from "next/link";
import { Row, Col, Tab, Dropdown, Form, Button } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
  DropdownMenuContentCode,
  DropdownMenuContentCode2,
  DropdownMenuContentForm2Code,
  DropdownMenuContentFormCode,
  DropdownMenuContextTextCode,
} from "data/code/DropdownCode";

const DropdownMenuContent = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="menu-content" className="mb-4">
            <h2>Menu content</h2>
            <div className="mt-4" id="headers">
              <h3 className="fw-semibold mb-1">Header</h3>
              <p>
                Add a header to label sections of actions in any dropdown menu.
              </p>
            </div>
          </div>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Dropdown.Menu className="d-block position-static" show>
                  <Dropdown.Header as={"h6"}>Dropdown header</Dropdown.Header>
                  <Dropdown.Item href="">Action</Dropdown.Item>
                  <Dropdown.Item href="">Another action</Dropdown.Item>
                </Dropdown.Menu>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={DropdownMenuContentCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Dropdown Divider */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="dividers" className="mb-4">
            <h3 className="fw-semibold mb-1">Dividers</h3>
            <p>Separate groups of related menu items with a divider.</p>
          </div>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Dropdown.Menu className="d-block position-static" show>
                  <Dropdown.Header as={"h6"}>Dropdown header</Dropdown.Header>
                  <Dropdown.Item href="">Action</Dropdown.Item>
                  <Dropdown.Item href="">Another action</Dropdown.Item>
                  <Dropdown.Item href="">Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="">Separated link</Dropdown.Item>
                </Dropdown.Menu>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={DropdownMenuContentCode2} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Dropdown Text */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="text" className="mb-4">
            <h3 className="fw-semibold mb-1">Text</h3>
            <p>
              Place any freeform text within a dropdown menu with text and use
              spacing utilities. Note that you’ll likely need additional sizing
              styles to constrain the menu width.
            </p>
          </div>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Dropdown.Menu
                  className="p-4 text-muted position-static d-block"
                  style={{ maxWidth: "200px" }}
                  show
                >
                  <p>
                    Some example text that&apos;s free-flowing within the
                    dropdown menu.
                  </p>
                  <p className="mb-0">And this is more example text.</p>
                </Dropdown.Menu>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={DropdownMenuContextTextCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Dropdown Form */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="forms" className="mb-4">
            <h3 className="fw-semibold mb-1">Forms</h3>
            <p>
              Put a form within a dropdown menu, or make it into a dropdown
              menu, and use <Link href="#"> margin or padding utilities </Link>{" "}
              to give it the negative space you require.
            </p>
          </div>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Dropdown.Menu className="position-static d-block" show>
                  <Form className="px-4 py-3">
                    <div className="mb-3">
                      <Form.Label htmlFor="exampleDropdownFormEmail1">
                        Email address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        id="exampleDropdownFormEmail1"
                        placeholder="email@example.com"
                      />
                    </div>

                    <div className="mb-3">
                      <Form.Label htmlFor="exampleDropdownFormPassword1">
                        Password
                      </Form.Label>
                      <Form.Control
                        type="email"
                        id="exampleDropdownFormPassword1"
                        placeholder="Password"
                      />
                    </div>

                    <div className="mb-3">
                      <Form.Check>
                        <Form.Check.Input type="checkbox" id="dropdownCheck" />
                        <Form.Check.Label htmlFor="dropdownCheck">
                          Remember me
                        </Form.Check.Label>
                      </Form.Check>
                    </div>
                    <Button variant="primary" type="submit">
                      Sign in
                    </Button>
                  </Form>
                  <Dropdown.Divider />
                  <Dropdown.Item href="">
                    New around here? Sign up
                  </Dropdown.Item>
                  <Dropdown.Item href="">Forgot password?</Dropdown.Item>
                </Dropdown.Menu>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={DropdownMenuContentFormCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Dropdown Form2 */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Dropdown.Menu className="position-static d-block" show>
                  <Form className="px-4 py-3">
                    <div className="mb-3">
                      <Form.Label htmlFor="exampleDropdownFormEmail2">
                        Email address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        id="exampleDropdownFormEmail2"
                        placeholder="email@example.com"
                      />
                    </div>

                    <div className="mb-3">
                      <Form.Label htmlFor="exampleDropdownFormPassword2">
                        Password
                      </Form.Label>
                      <Form.Control
                        type="email"
                        id="exampleDropdownFormPassword2"
                        placeholder="Password"
                      />
                    </div>

                    <div className="mb-3">
                      <Form.Check>
                        <Form.Check.Input type="checkbox" id="dropdownCheck" />
                        <Form.Check.Label htmlFor="dropdownCheck">
                          Remember me
                        </Form.Check.Label>
                      </Form.Check>
                    </div>
                    <Button variant="primary" type="submit">
                      Sign in
                    </Button>
                  </Form>
                </Dropdown.Menu>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={DropdownMenuContentForm2Code} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default DropdownMenuContent;
