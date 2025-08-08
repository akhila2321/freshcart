"use client";

// import node module libraries
import {
  Row,
  Col,
  Tab,
  Form,
  InputGroup,
  Button,
  Dropdown,
} from "react-bootstrap";

// import template components
import DocsInnerLayout from "layout/DocsInnerLayout";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { InputGroupLinks } from "data/SidebarContentLinks";
import {
  InputGroupEightCode,
  InputGroupFiveCode,
  InputGroupFourCode,
  InputGroupNineCode,
  InputGroupOneCode,
  InputGroupSevenCode,
  InputGroupSixCode,
  InputGroupThreeCode,
  InputGroupTwoCode,
} from "data/code/formsCode/InputGroupCode";

const Index = () => {
  return (
    <DocsInnerLayout links={InputGroupLinks}>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-8" id="intro">
            <h1 className="mb-0 fw-bold">Input Group</h1>
            <p className="mb-0 lead text-muted">
              Examples and usage guidelines for form control styles, layout
              options, and custom components for creating a wide variety of
              forms.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="basic" className="mb-4">
            <h2>Default Input</h2>
            <p>
              Place one add-on or button on either side of an input. You may
              also place one on both sides of an input. Remember to place{' '}
              <code className="highlighter-rouge">&lt;label&gt;</code>s outside
              the input group.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="fw-semibold mb-1" id="input">
              Input
            </h3>
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                  <Form.Control type="text" placeholder="Username" />
                </InputGroup>

                <InputGroup className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Recipient's username"
                  />
                  <InputGroup.Text id="basic-addon2">
                    @example.com
                  </InputGroup.Text>
                </InputGroup>

                <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon3">
                    https://example.com/users/
                  </InputGroup.Text>
                  <Form.Control type="text" id="basic-url" />
                </InputGroup>

                <InputGroup className=" mb-3">
                  <InputGroup.Text className="input-group-text">
                    $
                  </InputGroup.Text>
                  <Form.Control type="text" />
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                  <Form.Control type="text" placeholder="Username" />
                  <InputGroup.Text>@</InputGroup.Text>
                  <Form.Control type="text" placeholder="Server" />
                </InputGroup>

                <InputGroup>
                  <InputGroup.Text className="input-group-text">
                    With textarea
                  </InputGroup.Text>
                  <Form.Control as="textarea" rows={2} />
                </InputGroup>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={InputGroupOneCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="options" className="mb-4">
            <h2>Options</h2>
            <div className="mt-4" id="sizing">
              <h3 className="fw-semibold mb-1">Sizing</h3>
              <p>
                Add the relative form sizing classes to the
                <code className="highlighter-rouge"> .input-group </code>
                itself and contents within will automatically resize—no need for
                repeating the form control size classes on each element.
              </p>
            </div>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-sm">
                    Small
                  </InputGroup.Text>
                  <Form.Control type="text" />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text id="inputGroup-sizing-default">
                    Default
                  </InputGroup.Text>
                  <Form.Control type="text" />
                </InputGroup>

                <InputGroup size="lg">
                  <InputGroup.Text id="inputGroup-sizing-lg">
                    Large
                  </InputGroup.Text>
                  <Form.Control type="text" />
                </InputGroup>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={InputGroupTwoCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="multiple-inputs" className="mb-4">
            <h2>Multiple input</h2>
            <p>
              While multiple
              <code className="highlighter-rouge"> &lt;input&gt; </code>s are
              supported visually, validation styles are only available for input
              groups with a single
              <code className="highlighter-rouge"> &lt;input&gt; </code>.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <InputGroup>
                  <InputGroup.Text>First and last name</InputGroup.Text>
                  <Form.Control type="text" />
                  <Form.Control type="text" />
                </InputGroup>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={InputGroupThreeCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="multiple-addons" className="mb-4">
            <h2>Multiple addons</h2>
            <p>
              Multiple add-ons are supported and can be mixed with checkbox and
              radio input versions.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <InputGroup className="mb-3">
                  <InputGroup.Text>$</InputGroup.Text>
                  <InputGroup.Text>0.00</InputGroup.Text>
                  <Form.Control type="text" />
                </InputGroup>

                <InputGroup>
                  <Form.Control type="text" />
                  <InputGroup.Text>$</InputGroup.Text>
                  <InputGroup.Text>0.00</InputGroup.Text>
                </InputGroup>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={InputGroupFourCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="button-addons" className="mb-4">
            <h2>Button addons</h2>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <InputGroup className="mb-3">
                  <Button
                    variant="outline-secondary"
                    type="button"
                    id="button-addon1"
                  >
                    Button
                  </Button>
                  <Form.Control type="text" placeholder="" />
                </InputGroup>

                <InputGroup className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Recipient's username"
                  />
                  <Button
                    variant="outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Button
                  </Button>
                </InputGroup>

                <InputGroup className="mb-3">
                  <Button variant="outline-secondary" type="button">
                    Button
                  </Button>
                  <Button variant="outline-secondary" type="button">
                    Button
                  </Button>
                  <Form.Control type="text" placeholder="" />
                </InputGroup>

                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Recipient's username"
                  />
                  <Button variant="outline-secondary">Button</Button>
                  <Button variant="outline-secondary">Button</Button>
                </InputGroup>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={InputGroupFiveCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="button-with-dropdown" className="mb-4">
            <h2>Buttons with dropdowns</h2>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <InputGroup className="mb-3">
                  <Dropdown>
                    <Dropdown.Toggle variant="outline-secondary ">
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="">Action</Dropdown.Item>
                      <Dropdown.Item href="">Another action</Dropdown.Item>
                      <Dropdown.Item href="">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Form.Control type="text" />
                </InputGroup>

                <InputGroup className="mb-3">
                  <Form.Control type="text" />
                  <Dropdown>
                    <Dropdown.Toggle variant="outline-secondary ">
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="">Action</Dropdown.Item>
                      <Dropdown.Item href="">Another action</Dropdown.Item>
                      <Dropdown.Item href="">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </InputGroup>

                <InputGroup>
                  <Dropdown>
                    <Dropdown.Toggle variant="outline-secondary ">
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="">Action</Dropdown.Item>
                      <Dropdown.Item href="">Another action</Dropdown.Item>
                      <Dropdown.Item href="">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Form.Control type="text" />
                  <Dropdown>
                    <Dropdown.Toggle variant="outline-secondary ">
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-end">
                      <Dropdown.Item href="">Action</Dropdown.Item>
                      <Dropdown.Item href="">Another action</Dropdown.Item>
                      <Dropdown.Item href="">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </InputGroup>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={InputGroupSixCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="segmented-buttons" className="mb-4">
            <h2>Segmented buttons</h2>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <InputGroup className="mb-3">
                  <Button variant="outline-secondary">Action</Button>
                  <Dropdown drop="down">
                    <Dropdown.Toggle variant="outline-secondary" split />
                    <Dropdown.Menu>
                      <Dropdown.Item href="">Action</Dropdown.Item>
                      <Dropdown.Item href="">Another action</Dropdown.Item>
                      <Dropdown.Item href="">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Form.Control type="text" />
                </InputGroup>

                <InputGroup className="mb-3">
                  <Form.Control type="text" />
                  <Button variant="outline-secondary">Action</Button>
                  <Dropdown drop="down">
                    <Dropdown.Toggle variant="outline-secondary" split />
                    <Dropdown.Menu className="dropdown-menu-end">
                      <Dropdown.Item href="">Action</Dropdown.Item>
                      <Dropdown.Item href="">Another action</Dropdown.Item>
                      <Dropdown.Item href="">Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="">Separated link</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </InputGroup>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={InputGroupSevenCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="custom-select" className="mb-4">
            <h2>Custom select</h2>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <InputGroup className="input-group mb-3">
                  <InputGroup.Text htmlFor="inputGroupSelect01">
                    Options
                  </InputGroup.Text>
                  <Form.Select id="inputGroupSelect01">
                    <option value="">Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </InputGroup>

                <InputGroup className=" mb-3">
                  <Form.Select id="inputGroupSelect02">
                    <option value="">Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <InputGroup.Text htmlFor="inputGroupSelect02">
                    Options
                  </InputGroup.Text>
                </InputGroup>

                <InputGroup className=" mb-3">
                  <Button variant="outline-secondary" type="button">
                    Button
                  </Button>
                  <Form.Select id="inputGroupSelect03">
                    <option value="">Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </InputGroup>

                <InputGroup>
                  <Form.Select id="inputGroupSelect04">
                    <option value="">Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Button variant="outline-secondary" type="button">
                    Button
                  </Button>
                </InputGroup>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={InputGroupEightCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="custom-file-input" className="mb-4">
            <h2>Custom file input</h2>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <InputGroup className="mb-3">
                  <InputGroup.Text htmlFor="inputGroupFile01">
                    Upload
                  </InputGroup.Text>
                  <Form.Control type="file" id="inputGroupFile01" />
                </InputGroup>
                <InputGroup className=" mb-3">
                  <Form.Control type="file" id="inputGroupFile02" />
                  <InputGroup.Text htmlFor="inputGroupFile02">
                    Upload
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup className=" mb-3">
                  <Button
                    variant="outline-secondary"
                    type="button"
                    id="inputGroupFileAddon03"
                  >
                    Button
                  </Button>
                  <Form.Control type="file" id="inputGroupFile03" />
                </InputGroup>
                <InputGroup>
                  <Form.Control type="file" id="inputGroupFile04" />
                  <Button
                    variant="outline-secondary"
                    type="button"
                    id="inputGroupFileAddon04"
                  >
                    Button
                  </Button>
                </InputGroup>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={InputGroupNineCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </DocsInnerLayout>
  );
};

export default Index;
