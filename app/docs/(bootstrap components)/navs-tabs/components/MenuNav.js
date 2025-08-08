// import node module libraries
import { Fragment } from "react";
import { Row, Col, Tab, Nav } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { MenuNav2Code, MenuNavCode } from "data/code/NavTabCode";

const MenuNav = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="base-nav" className="mb-4">
            <h2>Menu nav</h2>
            <p>
              Navigation available in Bootstrap share general markup and styles,
              from the base
              <code className="highlighter-rouge"> .nav </code>
              class to the active and disabled states. Swap modifier classes to
              switch between each style.
            </p>
            <p>
              The base
              <code className="highlighter-rouge"> .nav </code>
              component is built with flexbox and provide a strong foundation
              for building all types of navigation components. It includes some
              style overrides (for working with lists), some link padding for
              larger hit areas, and basic disabled styling.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Nav>
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
                <HighlightCode code={MenuNavCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Base Nav */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div className="mb-4">
            <p>
              Classes are used throughout, so your markup can be super flexible.
              Use
              <code className="highlighter-rouge"> &lt;ul&gt; </code>s like
              above,
              <code className="highlighter-rouge"> &lt;ol&gt; </code>
              if the order of your items is important, or roll your own with a
              <code className="highlighter-rouge"> &lt;nav&gt; </code>
              element. Because the
              <code className="highlighter-rouge"> .nav </code>
              uses
              <code className="highlighter-rouge"> display: flex </code>, the
              nav links behave the same as nav items would, but without the
              extra markup.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Nav>
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
                <HighlightCode code={MenuNav2Code} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default MenuNav;
