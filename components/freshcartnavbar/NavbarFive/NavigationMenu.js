// import node module libraries
import { useSelector } from "react-redux";
import { Navbar, Container, Offcanvas, Image, Button, Nav } from "react-bootstrap";

// import custom components
import CategoryDropdownWithIcon from "../sub-components/CategoryDropdownWithIcon";

const NavigationMenu = ({ isMenuOpen, menuClose, activeView, onNavigate }) => {
  const logo = useSelector((state) => state.app.logo);
  
  const handleNavClick = (view) => {
    onNavigate?.(view);
    menuClose?.();
  };

  return (
    <Navbar
      expand="lg"
      variant="light"
      className="navbar-default p-0 p-sm-0 navbar-offcanvas-color"
    >
      <Container className="px-0">
        <Offcanvas
          show={isMenuOpen}
          placement="start"
          id="navbar-default"
          responsive="lg"
        >
          <Offcanvas.Header className="pb-1">
            <div className="d-flex align-items-center">
              <Image src={logo} alt="" className="me-2" style={{ height: '40px' }} />
            </div>
            <Button variant="close" onClick={() => menuClose?.()} />
          </Offcanvas.Header>
          <Offcanvas.Body className="d-flex flex-column">
            <Nav className="flex-column mb-4">
              <Nav.Item>
                <button
                  className={`nav-link text-start p-3 border-bottom ${activeView === 'home' ? 'active fw-bold' : ''}`}
                  onClick={() => handleNavClick('home')}
                >
                  Home
                </button>
              </Nav.Item>
              <Nav.Item>
                <button
                  className="nav-link text-start p-3 border-bottom"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  All
                </button>
              </Nav.Item>
            </Nav>
            
            <div className="mt-auto">
              <button
                className="btn btn-outline-primary w-100 fw-bold"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                All
              </button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavigationMenu;
