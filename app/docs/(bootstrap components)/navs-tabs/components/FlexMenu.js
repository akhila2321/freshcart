// import node module libraries
import Link from "next/link";
import { Fragment } from "react";
import { Row, Col, Tab, Nav } from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data file
import { FlexNavMenuCode, FlexNavMenuCode2 } from "data/code/NavTabCode";

const FlexMenu = () => {
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="working-with-flex-utilities" className="mb-4">
            <h2>Working with flex utilities</h2>
            <p>
              If you need responsive nav variations, consider using a series of
              <Link href="#"> flexbox utilities </Link>. While more verbose,
              these utilities offer greater customization across responsive
              breakpoints. In the example below, our nav will be stacked on the
              lowest breakpoint, then adapt to a horizontal layout that fills
              the available width starting from the small breakpoint.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Nav variant="pills" className="flex-column flex-sm-row">
                  <Nav.Link
                    as={Link}
                    href=""
                    className="flex-sm-fill text-sm-center"
                    active
                  >
                    Active
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    href=""
                    className="flex-sm-fill text-sm-center"
                  >
                    Longer nav link
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    href=""
                    className="flex-sm-fill text-sm-center"
                  >
                    Link
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    href=""
                    className="flex-sm-fill text-sm-center"
                    disabled
                  >
                    Disabled
                  </Nav.Link>
                </Nav>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={FlexNavMenuCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* JavaScript behavior  */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="javascript-behavior" className="mb-4">
            <h2>JavaScript behavior</h2>
            <p>
              Use the tab JavaScript plugin—include it individually or through
              the compiled
              <code className="highlighter-rouge"> bootstrap.js </code>
              file—to extend our navigational tabs and pills to create tabbable
              panes of local content, even via dropdown menus.
            </p>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Tab.Container defaultActiveKey="#home">
                  <Nav variant="tabs" id="myTab" className="mb-3">
                    <Nav.Link as="a" eventKey="#home" id="home-tab">
                      Home
                    </Nav.Link>
                    <Nav.Link as="a" eventKey="#profile" id="profile-tab">
                      Profile
                    </Nav.Link>
                    <Nav.Link as="a" eventKey="#contact" id="contact-tab">
                      Contact
                    </Nav.Link>
                  </Nav>
                  <Tab.Content id="myTabContent">
                    <Tab.Pane id="home" eventKey="#home">
                      <p>
                        Consequat occaecat ullamco amet non eiusmod nostrud
                        dolore irure incididunt est duis anim sunt officia.
                        Fugiat velit proident aliquip nisi incididunt nostrud
                        exercitation proident est nisi. Irure magna elit commodo
                        anim ex veniam culpa eiusmod id nostrud sit cupidatat in
                        veniam ad. Eiusmod consequat eu adipisicing minim anim
                        aliquip cupidatat culpa excepteur quis. Occaecat sit eu
                        exercitation irure Lorem incididunt nostrud.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane id="profile" eventKey="#profile">
                      <p>
                        Consequat occaecat ullamco amet non eiusmod nostrud
                        dolore irure incididunt est duis anim sunt officia.
                        Fugiat velit proident aliquip nisi incididunt nostrud
                        exercitation proident est nisi. Irure magna elit commodo
                        anim ex veniam culpa eiusmod id nostrud sit cupidatat in
                        veniam ad. Eiusmod consequat eu adipisicing minim anim
                        aliquip cupidatat culpa excepteur quis. Occaecat sit eu
                        exercitation irure Lorem incididunt nostrud.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane id="contact" eventKey="#contact">
                      <p>
                        Consequat occaecat ullamco amet non eiusmod nostrud
                        dolore irure incididunt est duis anim sunt officia.
                        Fugiat velit proident aliquip nisi incididunt nostrud
                        exercitation proident est nisi. Irure magna elit commodo
                        anim ex veniam culpa eiusmod id nostrud sit cupidatat in
                        veniam ad. Eiusmod consequat eu adipisicing minim anim
                        aliquip cupidatat culpa excepteur quis. Occaecat sit eu
                        exercitation irure Lorem incididunt nostrud.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={FlexNavMenuCode2} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default FlexMenu;
