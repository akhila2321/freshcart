// import node module libraries
import { Fragment } from "react";
import Link from "next/link";
import { Row, Col, Tab, Nav } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { HorizontalMenuCode, HorizontalMenuCode2 } from "data/code/NavTabCode";

const HorizontalMenu = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4">
            <div className="mt-4" id="horizontal-alignment">
              <h2 className="fw-bold">Horizontal alignment</h2>
              <p>
                Change the horizontal alignment of your nav with
                <Link href="#"> flexbox utilities </Link>. By default, navs are
                left-aligned, but you can easily change them to center or right
                aligned.
              </p>
              <h3 className="mt-6 fw-semibold mb-1">Nav Center</h3>
              <p>
                Centered with
                <code className="highlighter-rouge">
                  {" "}
                  .justify-content-center{" "}
                </code>
                :
              </p>
            </div>
          </div>

          {/* Nav Center */}
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Nav className="justify-content-center">
                  <Nav.Item>
                    <Nav.Link href="" active>
                      Active
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="">Link</Nav.Link>
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
                <HighlightCode code={HorizontalMenuCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Nav Right */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4 mt-10">
            <h3 className="fw-semibold mb-1">Nav Right</h3>
            <p>
              Right-aligned with
              <code className="highlighter-rouge"> .justify-content-end </code>:
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Nav className="justify-content-end">
                  <Nav.Item>
                    <Nav.Link href="" active>
                      Active
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="">Link</Nav.Link>
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
                <HighlightCode code={HorizontalMenuCode2} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default HorizontalMenu;
