// import node module libraries
import {
  Row,
  Col,
  Tab,
  Navbar,
  Container,
  Offcanvas,
  Nav,
  Form,
  Button,
} from "react-bootstrap";

// import custom components
import CustomTab from "components/common/CustomTab";
import { HighlightCode } from "components/common/HighlightCode";

// import required hooks
import useToggle from "hooks/useToggle";

// import required data file
import { OffcanvasCode } from "data/code/NavbarCode";

const OffcanvasNavbar = () => {
  const { isToggled, toggle, handleClose } = useToggle();

  return (
    <Row>
      <Col xl={12} lg={12} md={12} sm={12} xs={12}>
        <div id="offcanvas">
          <h2>Offcanvas</h2>
          <p>
            Transform your expanding and collapsing navbar into an offcanvas
            drawer with the offcanvas plugin. We extend both the offcanvas
            default styles and use our
            <code>.navbar-expand-*</code>
            classes to create a dynamic and flexible navigation sidebar.
          </p>
          <p>
            In the example below, to create an offcanvas navbar that is always
            collapsed across all breakpoints, omit the
            <code>.navbar-expand-*</code>
            class entirely.
          </p>
        </div>
        <div className="mb-10">
          <CustomTab defaultActiveKey={"design"}>
            <Tab.Pane
              title="Design"
              eventKey={"design"}
              id="pills-offcanvas-design"
            >
              <div className="position-relative">
                <Navbar variant="light" className="bg-light" expand={false}>
                  <Container fluid>
                    <Navbar.Brand className="fs-3" href="">
                      Offcanvas navbar
                    </Navbar.Brand>
                    <Navbar.Toggle
                      as="span"
                      className="navbar-toggler-icon"
                      onClick={() => toggle()}
                    />
                    <Offcanvas
                      show={isToggled}
                      onHide={handleClose}
                      placement="end"
                      id="offcanvasNavbar"
                    >
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title as="h5" id="offcanvasNavbarLabel">
                          Offcanvas
                        </Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body>
                        <Nav
                          as="ul"
                          className="justify-content-end flex-grow-1 pe-3 mb-2"
                        >
                          <Nav.Item as="ul">
                            <Nav.Link as="li" href="">
                              Home
                            </Nav.Link>
                            <Nav.Link as="li" href="">
                              Pages
                            </Nav.Link>
                            <Nav.Link as="li" href="">
                              Dashboard
                            </Nav.Link>
                            <Nav.Link as="li" href="">
                              Docs
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                        <Form className="d-flex">
                          <Form.Control
                            className="me-2"
                            type="search"
                            placeholder="Search"
                          />
                          <Button variant="outline-success">Search</Button>
                        </Form>
                      </Offcanvas.Body>
                    </Offcanvas>
                  </Container>
                </Navbar>
              </div>
            </Tab.Pane>
            <Tab.Pane title="Code" eventKey={"code"}>
              <HighlightCode code={OffcanvasCode} />
            </Tab.Pane>
          </CustomTab>
        </div>
      </Col>
    </Row>
  );
};

export default OffcanvasNavbar;
