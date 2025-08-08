// import node module libraries
import { Fragment } from "react";
import { useSelector } from "react-redux";
import {
  Row,
  Col,
  Tab,
  Navbar,
  Nav,
  NavDropdown,
  Image,
} from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required data files
import { DefaultNavbarCode, NavbarBrandCode } from "data/code/NavbarCode";


const DefaultNavbar = () => {
  const logo = useSelector((state) => state.app.logo)
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="default-navbar" className="mb-4">
            <h2>Default</h2>
          </div>
          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Navbar expand="lg" variant="light">
                  <Navbar.Brand href="#home">
                    <Image src={logo} alt="" />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="me-auto" as="ul">
                      <Nav.Item as="li">
                        <Nav.Link href="#home" active>
                          Home
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link href="#link">Link</Nav.Link>
                      </Nav.Item>
                      <NavDropdown title="Dropdown" id="navbarDropdown">
                        <NavDropdown.Item href="#">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Item as="li">
                        <Nav.Link href="#" disabled>
                          Disabled
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={DefaultNavbarCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>

      {/* Default Navbar Brand */}
      <Row>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <div id="brand-navbar" className="mb-4">
            <h2>Brand</h2>
            <p>
              The
              <code> .navbar-brand </code>
              can be applied to most elements, but an anchor works best, as some
              elements might require utility classes or custom styles.
            </p>
          </div>

          <div className="mb-10">
            <CustomTab defaultActiveKey={"design"}>
              <Tab.Pane title="Design" eventKey={"design"}>
                <Navbar variant="light">
                  <Navbar.Brand>
                    <Image src={logo} alt="" />
                  </Navbar.Brand>
                </Navbar>
              </Tab.Pane>
              <Tab.Pane title="Code" eventKey={"code"}>
                <HighlightCode code={NavbarBrandCode} />
              </Tab.Pane>
            </CustomTab>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default DefaultNavbar;
