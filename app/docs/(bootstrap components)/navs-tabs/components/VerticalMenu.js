// import node module libraries
import { Fragment } from "react";
import { Row, Col, Tab, Nav } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { VerticalNavCode, VerticalNavCode2 } from "data/code/NavTabCode";

const VerticalMenu = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="vertical" className="mb-4">
            <h2 className="fw-bold">Vertical</h2>
            <p>
              Stack your navigation by changing the flex item direction with the
              <code className="highlighter-rouge"> .flex-column </code>
              utility. Need to stack them on some viewports but not others? Use
              the responsive versions (e.g.,
              <code className="highlighter-rouge"> .flex-sm-column </code>
              ).
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Nav className="flex-column" as="ul">
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
                <HighlightCode code={VerticalNavCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Vertical Nav Without ul  */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mt-4 mb-4">
            <p>
              As always, vertical navigation is possible without
              <code className="highlighter-rouge"> &lt;ul&gt; </code>
              s, too.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Nav className="flex-column">
                  <Nav.Link href="" active>
                    Active
                  </Nav.Link>
                  <Nav.Link href="">Link</Nav.Link>
                  <Nav.Link href="">Link</Nav.Link>
                  <Nav.Link href="" disabled>
                    Disabled
                  </Nav.Link>
                </Nav>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={VerticalNavCode2} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default VerticalMenu;
