// import node module libraries
import { Fragment } from "react";
import Link from "next/link";
import { Row, Col, Tab, Nav } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import {
  NavFillCode,
  NavFillCode2,
  NavFillCode3,
  PillsMenuCode,
  TabsMenuCode,
} from "data/code/NavTabCode";

const TabsMenu = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="tabs" className="mb-4">
            <h2>Tabs</h2>
            <p>
              Takes the basic nav from above and adds the
              <code className="highlighter-rouge"> .nav-tabs </code>
              class to generate a tabbed interface. Use them to create tabbable
              regions with our
              <Link href="#javascript-behavior"> tab JavaScript plugin</Link>.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Nav variant="tabs" as="ul">
                  <Nav.Item as="li">
                    <Nav.Link href="" active>
                      Active
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="">Link</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="">Link</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="" disabled>
                      Disabled
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={TabsMenuCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Nav Pills */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="pills" className="mb-4">
            <h2>Pills</h2>
            <p>
              Take that same HTML, but use
              <code className="highlighter-rouge">.nav-pills</code>
              instead:
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Nav as="ul" variant="pills">
                  <Nav.Item as="li">
                    <Nav.Link href="" active>
                      Active
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="">Link</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="">Link</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="" disabled>
                      Disabled
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={PillsMenuCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
      {/* Fill and justify */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="fill-and-justify" className="mb-4">
            <h2>Fill and justify</h2>
            <p>
              Force your
              <code className="highlighter-rouge"> .nav </code>
              ’s contents to extend the full available width one of two modifier
              classes. To proportionately fill all available space with your
              <code className="highlighter-rouge"> .nav-item </code>
              s, use
              <code className="highlighter-rouge"> .nav-fill </code>. Notice
              that all horizontal space is occupied, but not every nav item has
              the same width.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Nav as="ul" variant="pills" fill>
                  <Nav.Item as="li">
                    <Nav.Link href="" active>
                      Active
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="">Much longer nav link</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="">Link</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link href="" disabled>
                      Disabled
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={NavFillCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Nav Justify Second */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4">
            <p>
              When using a
              <code className="highlighter-rouge"> &lt;nav&gt; </code>
              -based navigation, be sure to include
              <code className="highlighter-rouge"> .nav-item </code>
              on the anchors.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Nav variant="pills" fill>
                  <Nav.Item>
                    <Nav.Link href="" active>
                      Active
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="">Much longer nav link</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="">Link</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="" disabled>
                      Disabled
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={NavFillCode2} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
      {/* Nav justify third */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4 mt-4">
            <p>
              Similar to the
              <code className="highlighter-rouge"> .nav-fill </code>
              example using a
              <code className="highlighter-rouge"> &lt;nav&gt; </code>
              -based navigation, be sure to include
              <code className="highlighter-rouge"> .nav-item </code>
              on the anchors.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Nav variant="pills" justify>
                  <Nav.Item>
                    <Nav.Link href="" active>
                      Active
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="">Much longer nav link</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="">Link</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="" disabled>
                      Disabled
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={NavFillCode3} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default TabsMenu;
